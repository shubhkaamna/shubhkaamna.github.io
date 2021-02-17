var wishes = [
	"अकाल मृत्यु वो मरे जो काम करे चांडाल का, काल भी उसका क्या करे जो भक्त हो महाकाल का।",
	"महाशिवरात्रि के इस शुभ अवसर पर शिव का सारा आशीर्वाद आपके साथ रहे। उनकी शानदार दिव्य और दयालु विशेषताएं आपको अपनी सभी क्षमताओं को याद दिला सकती हैं और इसे ऊंचाइयों तक ले जाने का प्रयास करती हैं। आपको महा शिवरात्रि की शुभकामनाएँ!",
	"भगवान शिव आप और आपके परिवार पर अपनी कृपा बरसाएं। आप उनके शाश्वत प्रेम और शक्ति से घिरे रहें और महाशिवरात्रि 2021 की शुभकामनाएँ!",
	"ईश्वरीय गौरव आपको आपकी क्षमताओं की याद दिलाता है, और सफलता पाने में आपकी मदद करता है। आपको महा शिवरात्रि की शुभकामनाएँ!",
	"यह शिवरात्रि आपको और आपके परिवार को आशीर्वाद दे। सर्वशक्तिमान भगवान शिव आपको सभी अच्छी चीजों का आशीर्वाद दें। हैप्पी महाशिवरात्रि 2021!",
	"आपकी सभी प्रार्थनाएँ शिव द्वारा दी जाएँ! आपको और आपके परिवार को महाशिवरात्रि की हार्दिक शुभकामनाएँ!",
	"इस शिवरात्रि पर शिवजी आप सभी पर अपनी कृपा बरसा सकते हैं और अपने परिवार के प्रत्येक सदस्य पर खुशियों की बौछार कर सकते हैं। आप सभी को महाशिवरात्रि की हार्दिक शुभकामनाएं।",
	"शिवरात्रि की पूरी रात भगवान शिव के नाम का जाप करते हुए बिताएं और उनका दिव्य आशीर्वाद प्राप्त करें! आपको और आपके परिवार को एक बहुत ही शुभ महा शिवरात्रि!",
	"ओम नमः शिवाय कहते रहें! भगवान शिव का आशीर्वाद जीवन भर आपके साथ बना रहे। हैप्पी महा शिवरात्रि, 2021!",
	"महा शिवरात्रि के अवसर पर सर्वशक्तिमान भगवान शिव आपको सभी अच्छी चीजों और उत्तम स्वास्थ्य का आशीर्वाद दे सकते हैं। आपको महा शिवरात्रि की शुभकामनाएँ!",
	"यह सुबह आपके जीवन में सकारात्मक बदलाव ला सकती है। इस दिन को पूरी श्रद्धा के साथ मनाएं। आपको महा शिवरात्रि की शुभकामनाएं।",
	"भगवान शिव आपके सभी उत्तर दें और उनका आशीर्वाद हमेशा आपके साथ रहे। आपको महा शिवरात्रि की शुभकामनाएँ!",
	"आपकी सभी प्रार्थनाएँ भगवान शिव द्वारा दी जायें! आपको शुभ महाशिवरात्रि 2021 की शुभकामनाएं!",
	"आपकी सभी इच्छाएँ पूरी हों और भगवान का आशीर्वाद आपके साथ हमेशा बना रहे। हैप्पी महा शिवरात्रि!",
	"हैप्पी महा शिवरात्रि भगवान आप सभी को ढेर सारी शुभकामनाएं दें और ढेर सारी खुशियां, आपकी शुभकामनाएं।",
	"महाशिवरात्रि की शुभ दिन, महा शिवरात्रि के शुभ दिन, भगवान आपकी सभी इच्छाओं को पूरा करें और आपको एक खुशहाल जीवन का आशीर्वाद दें।"
];
const wishEl = document.querySelector("#wish");
let currentWish = wishes[Math.floor(Math.random() * wishes.length)];
wishEl.innerHTML = currentWish;


const authorEl = document.querySelector("#author");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
console.log(username);

const facebookEl = document.querySelector("#facebooklink");
const twitterEl = document.querySelector("#twitterlink");
const whatsappEl = document.querySelector("#whatsapplink");

if (username == null || username == undefined || username === "") {
	message = "हमारी तरफ से,";
	facebookEl.href = "https://www.facebook.com/sharer/sharer.php?u=shubhkaamna.site";
	twitterEl.href = `https://twitter.com/share?text=महाशिवरात्रि की हार्दिक शुभकामनायें&url=${window.location}`;
	whatsappEl.href = `https://api.whatsapp.com/send?text=🚩 महाशिवरात्रि की हार्दिक शुभकामनायें 🚩%0Aआपके लिए विशेष सन्देश है%0Aयहाँ पे क्लिक करे 👇%0A ${window.location}`;
} else {
	facebookEl.href = "https://www.facebook.com/sharer/sharer.php?u=shubhkaamna.site";
	twitterEl.href = `https://twitter.com/share?text=महाशिवरात्रि की हार्दिक शुभकामनायें%0A${username} ने आपके लिए विशेष सन्देश भेजा है 👇%0A ${window.location}`;
	whatsappEl.href = `https://api.whatsapp.com/send?text=🚩 महाशिवरात्रि की हार्दिक शुभकामनायें 🚩%0A*${username}* ने आपके लिए विशेष सन्देश भेजा है%0Aयहाँ पे क्लिक करे 👇%0A ${window.location}`;
	message = "<span class='username'>" + username + "</span> की तरफ से";
}
authorEl.innerHTML = message;



setTimeout(function () {
	swal({
		title: "Play Bhajan?",
		icon: 'info',
		buttons: ["Cancel", "Play"],
		dangerMode: true
	})
		.then((e) => {
			if (e) {
				alert("PLay");
				new Audio('./audio/shivratri.mp3').play();
			}
		})
}, 15000);
