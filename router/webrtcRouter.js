let clients = [];

wsServer.on('request', request => {
  const connection = request.accept();
  const id = Math.floor(Math.random() * 100);

  clients.forEach(client => client.connection.send(JSON.stringify({
    client: id,
    text: 'I am now connected',
  })));

  clients.push({ connection, id });

  connection.on('message', message => {
    clients
      .filter(client => client.id !== id)
      .forEach(client => client.connection.send(JSON.stringify({
        client: id,
        text: message.utf8Data,
      })));
  });

  connection.on('close', () => {
    clients = clients.filter(client => client.id !== id);
    clients.forEach(client => client.connection.send(JSON.stringify({
      client: id,
      text: 'I disconnected',
    })));
  });
});