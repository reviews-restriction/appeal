<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading Page</title>
<script>
  // Function to redirect after a delay
  function redirectAfterDelay() {
    setTimeout(function() {
      window.location.href = "new-page.html"; // Change "new-page.html" to the desired URL
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Call the redirect function when the page loads
  window.onload = redirectAfterDelay;
</script>
</head>
<body>
  <p>Loading...</p>
</body>
</html>
