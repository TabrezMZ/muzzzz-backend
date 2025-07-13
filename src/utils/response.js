exports.success = (message, data = null) => ({
  success: true,
  message,
  data
});

exports.error = (message, error = null) => ({
  success: false,
  message,
  error
});
