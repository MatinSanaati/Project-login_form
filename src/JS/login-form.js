// Inputs
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const passInput = document.querySelector(".pass-input");
const SubmitBtn = document.querySelector(".submit");

// Texts-Modules
const boxTextmodulename = document.querySelector(".box-text-module-name");
const boxTextmoduleemail = document.querySelector(".box-text-module-email");
const boxTextmodulepass = document.querySelector(".box-text-module-pass");
const boxModuleleft = document.querySelector(".box-module-left");

window.addEventListener("load", () => {
    if (nameInput) {
        nameInput.focus();
    };
});


// اضافه کردن event listener برای فشار دادن دکمه Enter
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSubmit(event);
    }
});


// Modules
const handleSubmit = (event) => {
    // جلوگیری از رفتار پیش‌فرض فرم
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passValue = passInput.value;

    // بررسی اینکه طول محتوای فیلدها کمتر از مقادیر مشخص نباشد
    let hasError = false;

    // بررسی نام
    if (nameValue.length < 4) {
        boxTextmodulename.style.display = "inline";
        hasError = true;

        setTimeout(() => {
            boxTextmodulename.style.display = "none";
        }, 5000);
    }

    // تابع برای بررسی اعتبار ایمیل
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // بررسی ایمیل
    if (!isValidEmail(emailValue)) {
        boxTextmoduleemail.style.display = "inline";
        hasError = true;

        setTimeout(() => {
            boxTextmoduleemail.style.display = "none";
        }, 5000);
    }

    // بررسی پسورد
    if (passValue.length < 8) {
        boxTextmodulepass.style.display = "inline";
        hasError = true;

        setTimeout(() => {
            boxTextmodulepass.style.display = "none";
        }, 5000);
    }

    // اگر هیچ خطایی وجود نداشته باشد
    if (!hasError) {
        boxModuleleft.style.display = "inline";
        // ادامه عملیات ارسال اطلاعات یا پردازش فرم

        setTimeout(() => {
            boxModuleleft.style.display = "none";
        }, 5000);
    }
};

// اضافه کردن event listener برای کلیک روی دکمه
SubmitBtn.addEventListener("click", handleSubmit);





// Text-Input-Boxes
const textInputname = document.querySelector(".text-input-name");
const textInputemail = document.querySelector(".text-input-email");
const textInputpassword = document.querySelector(".text-input-password");

nameInput.addEventListener("input", () => {
    // console.log("Change");
    if (nameInput.value !== "") {
        textInputname.style.display = "inline"; // نمایش پیام
    } else {
        textInputname.style.display = "none"; // حذف پیام
    }
});

emailInput.addEventListener("input", () => {
    if (emailInput.value !== "") {
        textInputemail.style.display = "inline";
    } else {
        textInputemail.style.display = "none";
    };
});

passInput.addEventListener("input", () => {
    if (passInput.value !== "") {
        textInputpassword.style.display = "inline";
    } else {
        textInputpassword.style.display = "none";
    }
});

const btnEye = document.querySelector(".btn-eye");

btnEye.addEventListener("click", () => {
    // بررسی اینکه اگر نوع فیلد پسوورد است، آن را به تکست تغییر دهد و برعکس
    if (passInput.type === "password") {
        passInput.type = "text"; // تغییر نوع به تکست
        btnEye.innerText = "Hide"; // تغییر متن دکمه (اختیاری)
    } else {
        passInput.type = "password"; // تغییر نوع به پسوورد
        btnEye.innerText = "Show"; // تغییر متن دکمه (اختیاری)
    }
});