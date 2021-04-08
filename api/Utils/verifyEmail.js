
module.exports.verifyEmail = (email, urlgenerate) => {

    return {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Confirm Login',
        html: `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>body{margin: 0; background: rgba(0, 0, 0, 0) linear-gradient(to right, #EFE3CC 1%, #B6CEE3 100%) repeat scroll 0 0;}.email_container{width: 700px; margin: 20px auto; background: #ccc;}.reset_button{background: #1B94DD; border: none; color: #fff; padding: 12px 24px; font-size: 16px; border-radius: 4px;}.email_content{background: #fff; padding: 20px; margin: 26px;}.image_div{text-align: center; padding: 30px 0;}.footer_div{text-align: center; padding: 30px 0;}.footer_list{list-style: none; padding: 0;}.footer_list li{display: inline-block; background: #1B94DD; padding: 12px; border-radius: 50px; width: 20px; height: 20px; line-height: 20px; margin: 10px;}.footer_list li .fa{color: #fff; font-size: 16px;}</style></head><body><div class="email_container"> <div class="image_div"> <img src="http://localhost:5000/api/admin_assets/pages/img/logo_black.png"> </div><div class="email_content"> <h4>Please Verify Your EmailID</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><a href="${urlgenerate}" class="reset_button">Verify Your EamilID</a> <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</h5> </div><div class="footer_div"> <img src="src="http://localhost:5000/api/admin_assets/pages/img/logo_black.png""> <ul class="footer_list"> <li><i class="fa fa-twitter"></i></li><li><i class="fa fa-linkedin"></i></li></ul> <p>Copyright ©2020, All Rights Reserved | Privacy Policy</p></div></div></body></html>`,

    };
};