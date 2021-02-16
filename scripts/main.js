var wishes = [
	"अकाल मृत्यु वो मरे जो काम करे चांडाल का, काल भी उसका क्या करे जो भक्त हो महाकाल का।",
	// "On this auspicious occasion of Maha Shivratri. Shiva's all blessing be with you. May his glorious divine and merciful attributes remind you of all your abilities and strive it lift to heights. Happy Maha Shivratri to you!",
	"महाशिवरात्रि के इस शुभ अवसर पर शिव का सारा आशीर्वाद आपके साथ रहे। उनकी शानदार दिव्य और दयालु विशेषताएं आपको अपनी सभी क्षमताओं को याद दिला सकती हैं और इसे ऊंचाइयों तक ले जाने का प्रयास करती हैं। आपको महा शिवरात्रि की शुभकामनाएँ!",
	// "May lord shiva shower his blessings on you and your family. May you be surrounded with his eternal love and strength Happy Maha Shivratri 2021!",
	"भगवान शिव आप और आपके परिवार पर अपनी कृपा बरसाएं। आप उनके शाश्वत प्रेम और शक्ति से घिरे रहें और महाशिवरात्रि 2021 की शुभकामनाएँ!",
	// "May the divine glory remind you of your capabilities, and help you in attaining success. Happy Maha Shivaratri to you!",
	"ईश्वरीय गौरव आपको आपकी क्षमताओं की याद दिलाता है, और सफलता पाने में आपकी मदद करता है। आपको महा शिवरात्रि की शुभकामनाएँ!",
	// "May this Shivratri bring blessings to you and your family. May the almighty Lord Shiva bless you with all good things. Happy Maha Shivratri 2021!",
	"यह शिवरात्रि आपको और आपके परिवार को आशीर्वाद दे। सर्वशक्तिमान भगवान शिव आपको सभी अच्छी चीजों का आशीर्वाद दें। हैप्पी महाशिवरात्रि 2021!",
	// "May all your prayers be granted by Shiva! Wishing you and your family a very Happy Maha Shivratri!",
	"आपकी सभी प्रार्थनाएँ शिव द्वारा दी जाएँ! आपको और आपके परिवार को महाशिवरात्रि की हार्दिक शुभकामनाएँ!",
	// "This Shivratri may Shivji shower his blessings on all of you and shower happiness upon each of your family members. Wishing you all a very Happy Mahashivrati.",
	"इस शिवरात्रि पर शिवजी आप सभी पर अपनी कृपा बरसा सकते हैं और अपने परिवार के प्रत्येक सदस्य पर खुशियों की बौछार कर सकते हैं। आप सभी को महाशिवरात्रि की हार्दिक शुभकामनाएं।",
	// "Spend the whole night of Shivratri by chanting the name of Lord Shiva and seek his divine blessings! A very Happy Maha Shivratri to you and your family!",
	"शिवरात्रि की पूरी रात भगवान शिव के नाम का जाप करते हुए बिताएं और उनका दिव्य आशीर्वाद प्राप्त करें! आपको और आपके परिवार को एक बहुत ही शुभ महा शिवरात्रि!",
	// "Keep saying Om Namah Shivay! May the blessings of Lord Shiva remain with you throughout your life. Happy Maha Shivratri, 2021!",
	"ओम नमः शिवाय कहते रहें! भगवान शिव का आशीर्वाद जीवन भर आपके साथ बना रहे। हैप्पी महा शिवरात्रि, 2021!",
	// "On the occasion of Maha Shivratri may the almighty Lord Shiva bless you all good things and perfect health. Happy Maha Shivratri to you!",
	"महा शिवरात्रि के अवसर पर सर्वशक्तिमान भगवान शिव आपको सभी अच्छी चीजों और उत्तम स्वास्थ्य का आशीर्वाद दे सकते हैं। आपको महा शिवरात्रि की शुभकामनाएँ!",
	// "May this morning bring a positive change in your life. Celebrate the day with full devotion. Happy Maha Shivratri to you.",
	"यह सुबह आपके जीवन में सकारात्मक बदलाव ला सकती है। इस दिन को पूरी श्रद्धा के साथ मनाएं। आपको महा शिवरात्रि की शुभकामनाएं।",
	// "May Lord Shiva answer all yours and his blessings may always be with you. Happy Maha Shivratri to you!",
	"भगवान शिव आपके सभी उत्तर दें और उनका आशीर्वाद हमेशा आपके साथ रहे। आपको महा शिवरात्रि की शुभकामनाएँ!",
	// "May all your prayers be granted by Bhagwaan Shiva! Wishing you a Happy Maha Shivratri 2021!",
	"आपकी सभी प्रार्थनाएँ भगवान शिव द्वारा दी जायें! आपको शुभ महाशिवरात्रि 2021 की शुभकामनाएं!",
	// "May all your wishes come true and the blessings of God remain with you always. Happy Maha Shivratri!",
	"आपकी सभी इच्छाएँ पूरी हों और भगवान का आशीर्वाद आपके साथ हमेशा बना रहे। हैप्पी महा शिवरात्रि!",
	// "Happy Maha Shivratri god bless you all with lots and, Lots of happiness, your wishes.",
	"हैप्पी महा शिवरात्रि भगवान आप सभी को ढेर सारी शुभकामनाएं दें और ढेर सारी खुशियां, आपकी शुभकामनाएं।",
	// "Happy Maha Shivaratri, On the auspicio/us day of Maha Shivratri, May the lord fulfil all your wishes and bless you with a happy life.",
	"महाशिवरात्रि की शुभ दिन, महा शिवरात्रि के शुभ दिन, भगवान आपकी सभी इच्छाओं को पूरा करें और आपको एक खुशहाल जीवन का आशीर्वाद दें।"
];
const wishEl = document.querySelector("#wish");
let currentWish = wishes[Math.floor(Math.random() * wishes.length)];
wishEl.innerHTML = currentWish;


const authorEl = document.querySelector("#author");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
console.log(username);

if (username == null || username == undefined || username === "") {
	message = "हमारी तरफ से,";
} else {
	message = username + " की तरफ से";
}
authorEl.innerHTML = message;