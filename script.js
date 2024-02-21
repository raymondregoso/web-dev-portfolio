document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
        downloadButton.addEventListener("click", function() {
            var downloadUrl = "https://raw.githubusercontent.com/raymondregoso/myresume/main/resume.pdf"; // Replace with the actual raw URL of your resume PDF
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET", downloadUrl, true);
            xhr.responseType = "blob";

            xhr.onload = function() {
                if (xhr.status === 200) {
                    var blob = xhr.response;
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement("a");
                    a.style.display = "none";
                    a.href = url;
                    a.download = "resume.pdf"; 
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
            };
            xhr.send();
        });
    
    }
});


