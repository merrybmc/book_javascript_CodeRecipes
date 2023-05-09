let imageName = "image1.png";
imageName = imageName.replace("1.png", "2.png");
console.log(imageName);

let inputText = "제이\n펍";
inputText = inputText.replace("\n", "");
console.log(inputText);

let phoneNumber = "010-0234-0678";
phoneNumber.replace("-", ""); // 0101234-5678
phoneNumber = phoneNumber.replace(/-/g, "");
console.log(phoneNumber);
