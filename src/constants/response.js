const response = {
  200: {
    statusCode: 200,
  },
  201: {
    statusCode: 201,
  },
  404: {
    statusCode: 404,
    messages: {
      notFound: 'Page not found.',
    },
  },
  503: {
    statusCode: 503,
    messages: {
      serverError: 'Server error.',
    },
  },
};

module.exports = { response };
