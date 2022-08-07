function handleClick() {
  let options = document.getElementById("convertOptions");
  let textArea = document.getElementById("textArea");
  let resultArea = document.getElementById("resultArea");
  let resultJson = document.getElementById("result_json");
  let errorMsg = document.getElementById("errorMsg");

  //   let checkBox = document.getElementById("jsonCheckbox");

  if (textArea.value.length <= 200) {
    const baseUrl = "/api/v2/";
    var apiUrl;
    let formData = new URLSearchParams();

    switch (options.value) {
      case "unicode":
        apiUrl = `${baseUrl}convertunicode`;
        formData.append("value", textArea.value);
        break;
      case "unicode2preeti":
        apiUrl = `${baseUrl}font/unicode2preeti?query=${textArea.value}`;
        break;
      case "preeti2unicode":
        apiUrl = `${baseUrl}font/preeti2unicode?query=${textArea.value}`;
        break;

      case "bs2ad":
        apiUrl = `${baseUrl}convertdate`;
        formData.append("value", textArea.value);
        formData.append("type", 'AD');

        break;

      case "ad2bs":
        
        apiUrl = `${baseUrl}convertdate`;
        formData.append("value", textArea.value);
        formData.append("type", 'BS');

        break;

      case "np":
        
        apiUrl = `${baseUrl}convertnumtoword`;
        formData.append("value", textArea.value);
        formData.append("type", 'np');

        break;
      case "en":
        
        apiUrl = `${baseUrl}convertnumtoword`;
        formData.append("value", textArea.value);
        formData.append("type", 'en');

        break;

      default:
        console.log("none");
    }
    postData(apiUrl, formData);

    async function postData(apiUrl, formData) {
      await fetch(apiUrl, {
          method: "Post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Work with JSON data here
          if (data.error === true) {
            resultJson.value = JSON.stringify(data, null, 3);
            errorMsg.innerHTML = "";
            var node = document.createTextNode(`${data.msg} `);
            errorMsg.appendChild(node);
          } else {
            resultJson.value = JSON.stringify(data, null, 3);
            resultArea.value = data.result;
          }
        })
        .catch((err) => {
          errorMsg.innerHTML = "";
          var node = document.createTextNode(err);
          errorMsg.appendChild(node);
        });
    }
  } else {
    errorMsg.innerHTML = "";
    var node = document.createTextNode(
      "Text should not exceed more than 200 characters"
    );
    errorMsg.appendChild(node);
  }
}

function handleChange() {
  let resultJson = document.getElementById("result_json");
  resultJson.value = "";
  let errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = "";
}

window.onload = function defaultOption() {
  let textArea = document.getElementById("textArea");
  textArea.placeholder = "Example: Nepal ";
};

function handleExample() {
  let resultArea = document.getElementById("resultArea");
  let resultJson = document.getElementById("result_json");
  resultArea.value = "";
  resultJson.value = "";

  let textArea = document.getElementById("textArea");
  textArea.value = "";
  let options = document.getElementById("convertOptions");
  let response = document.getElementById("required");

  var placeText;
  var res;
  switch (options.value) {
    case "unicode":
      placeText = "Example: Nepal";
      res = "";
      break;
    case "unicode2preeti":
      placeText = "Example: नेपाल";
      res = "*Must have preeti font installed.";
      break;
    case "preeti2unicode":
      placeText = "Example: नेपाल";
      res = "";
      break;
    case "bs2ad":
      placeText = "Example: YYYY-MM-DD";
      res = "";
      break;
    case "ad2bs":
      placeText = "Example: YYYY-MM-DD";
      res = "";
      break;
    case "np":
      placeText = "Example: 12345";
      res = "";
      break;
    case "en":
      placeText = "Example: 12345";
      res = "";
      break;
  }
  textArea.placeholder = placeText;
  response.innerHTML = res;
}
