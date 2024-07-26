const response = {
  200: {
    statusCode: 200,
    messages: {
      success: 'Products have been created.',
    },
  },
  201: {
    statusCode: 201,
  },
  400: {
    statusCode: 400,
    messages: {
      noData: 'Please provide all necessary data.',
    },
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
      products: 'There are no products or error has occurred',
      phones: 'There are no phones or error has occurred',
    },
  },
};

module.exports = { response };
