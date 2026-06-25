async function getData() {

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwVCwp658VY9tVc3xoH4KZUpzcnsZ9He_is5qxGWX4o_wKhDLYj2ZHub5bShCkI2-SOAA/exec"
    );

    const data = await response.json();

    console.log(data);

}
