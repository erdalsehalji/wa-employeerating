<template>
    <div class="container">
        <div class="col-12">
            <div class="card-container">
                <span class="pro">EMPLOYEERAITNG</span>
                <img class="round" src="employee.jpg" alt="user" />
                <p>NAME  : {{ info.signupName }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>SURNAME :   {{ info.signupSurname }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>AGE : {{ info.signupAge }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>SEX : {{ info.signupSex }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>ADDRESS : {{ info.signupAddress }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>POSITION : {{ info.signupPosition }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>ENTERPRISE : {{ info.signupEnterprise }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                 <p>CITY : {{ info.signupCity }} <input class="editing"> <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
               <div class="containerr"><a href="" class="button">DELETE EMPLOYEE</a></div>  
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    props: ["info"],
}

</script>

<style scoped>.rating {
    overflow: hidden;
    display: inline-block;
    position: center;
}

.rating-input {
    float: right;
    width: 16px;
    height: 16px;
    padding: 0;
    margin: 0 0 0;
    opacity: 0;
}

.rating:hover .rating-star:hover,
.rating:hover .rating-star:hover~.rating-star,
.rating-input:checked~.rating-star {
    background-position: 0 0;
}

.rating-star,
.rating:hover .rating-star {
    position: center;
    display: block;
    float: right;
    width: 16px;
    height: 16px;
    background: url('https://www.everythingfrontend.com/samples/star-rating/star.png') 0 -16px;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
    box-sizing: border-box;
}


h3 {
    margin: 10px 0;
}

h6 {
    margin: 5px 0;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 21px;
}

.card-container {
    background-image: linear-gradient(rgb(70, 100, 110),rgb(64, 83, 90), rgb(69, 129, 118),rgb(51, 104, 122));;
    border-radius: 30px 10px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #B3B8CD;
    padding-top: 30px;
    position: relative;
    margin-bottom: 20px;
    text-align: center;
}

.card-container .pro {
    color: #231E39;
    background-color: #FEBB0B;
    border-radius: 30px 10px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
}

.editing {
      border: 2px solid rgb(98, 98, 98);
     padding: 5px;
     border-radius: 50px 20px;
     width: 100px;
}

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
    margin-bottom: 20px;
}

#DeleteButton {
    margin-bottom: 20px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

.button {
	 display: inline-block;
	 padding: 0.75rem 1.25rem;
	 border-radius: 10rem;
	 color: #fff;
	 font-size: 1rem;

	 transition: all 0.3s;
	 position: relative;
	 overflow: hidden;
	 z-index: 1;
}
 .button:after {
	 content: '';
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 background-color: #0cf;
	 border-radius: 10rem;
	 z-index: -2;
}
 .button:before {
	 content: '';
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 width: 0%;
	 height: 100%;
	 background-image:  linear-gradient(rgb(179, 62, 62), rgb(255, 6, 6));
	 transition: all 0.5s;
	 border-radius: 10rem;
	 z-index: -1;
}
 .button:hover {
	 color: #fff;
}
 .button:hover:before {
	 width: 100%;
}
/* optional reset for presentation */
 * {
	 font-family: Arial;
	 text-decoration: none;
	 font-size: 20px;
}
 .containerr {
	 padding-top: 20px;
	 margin: 0 auto;
	 width: 100%;
	 text-align: center;
}
 h1 {
	 font-size: 0.8rem;
	 margin-bottom: 2rem;
	 color: #777;
}
 span {
	 display: block;
	 margin-top: 2rem;
	 font-size: 0.7rem;
	 color: #777;
}
 span a {
	 font-size: 0.7rem;
	 color: #999;
	
}
 

</style>
