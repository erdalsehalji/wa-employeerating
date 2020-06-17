<template>
    <div class="container">
        <div class="col-12">
            <div class="card-container">
                <span class="pro">EMPLOYEERAITNG</span>
                <img class="round" src="employee.jpg" alt="user" />
                <p>NAME  : {{ info.signupName }} <button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>SURNAME :   {{ info.signupSurname }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>AGE : {{ info.signupAge }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>SEX : {{ info.signupSex }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>ADDRESS : {{ info.signupAddress }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>POSITION : {{ info.signupPosition }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <p>ENTERPRISE : {{ info.signupEnterprise }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                 <p>CITY : {{ info.signupCity }}<button type="submit" class="btn btn-primary ml-2">Edit</button></p>
                <button type="submit" id="DeleteButton" class="btn btn-danger ml-2">DELETE</button>
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
    background-color: rgb(64, 82, 85);
    border-radius: 5px;
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
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
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
</style>
