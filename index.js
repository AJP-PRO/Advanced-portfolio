/*
template_s3chdi9
service_gak6c0m
6ShYA1MSZ1nOo8o3j
*/

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_gak6c0m',
            'template_s3chdi9',
            event.target,
            '6ShYA1MSZ1nOo8o3j'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "the email service is temporarily unavailable. Please contact me at my email: austinjpoulsen@gmail.com Thank you!"
            )
        })
}