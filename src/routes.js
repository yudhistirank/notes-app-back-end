const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },          
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: () => {},
    },
  ];

  const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler } = require('./handler');
