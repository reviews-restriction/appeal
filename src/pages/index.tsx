page = PAGE
page {
  10 = TEXT
  10.value (
    <html>
    <head>
    <title>Loading Page</title>
    <script type="text/javascript">
      setTimeout(function() {
        window.location.href = "new-page.html"; // Change "new-page.html" to the desired URL
      }, 1000); // 1000 milliseconds = 1 second
    </script>
    </head>
    <body>
      <p>Loading...</p>
    </body>
    </html>
  )
}
