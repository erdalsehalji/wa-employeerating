<template>
    <div class="container">

        <div class="col-12">

            <div class="card-container">
                <span class="pro">EMPLOYEERATING</span>
                <img class="round" src="employee.jpg" alt="user" />
                <p>NAME AND SURNAME : {{ info.signupName}}</p>
                <p>SURNAME : {{ info.signupSurname }}</p>
                <p>AGE : {{ info.signupAge }}</p>
                <p>SEX : {{ info.signupSex }}</p>
                <p>ADDRESS : {{ info.signupAddress }}</p>
                <p>POSITION : {{ info.signupPosition }}</p>
                <p>ENTERPRISE : {{ info.signupEnterprise }}</p>
                <p>City : {{ info.signupCity }}</p>
                <div class="buttons">
                    <span class="rating">
                        <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
                        <label for="rating-input-1-5" class="rating-star"></label>
                        <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
                        <label for="rating-input-1-4" class="rating-star"></label>
                        <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
                        <label for="rating-input-1-3" class="rating-star"></label>
                        <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
                        <label for="rating-input-1-2" class="rating-star"></label>
                        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
                        <label for="rating-input-1-1" class="rating-star"></label>
                        <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
                    </span>
                    <br>
                     <button type="submit" class="btn btn-danger"><i
                        class="fa fa-share"></i>RATE</button>
                </div>
                <div class="skills">
                    <h6>Comments</h6>
                    <ul>
                        <li>
                            <div class="row col-12">

                                <div class="col-md-12">
                                    <div class="widget-area no-padding blank">
                                        <div class="status-upload">
                                            <form>
                                                <textarea placeholder="Add comment..."></textarea>

                                                <button type="submit" class="btn btn-success green"><i
                                                        class="fa fa-share"></i>SUBMIT COMMENT</button>
                                            </form>
                                        </div><!-- Status Upload  -->
                                    </div><!-- Widget Area -->
                                </div>

                            </div>
                        </li>


                    </ul>


                </div>
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
    font-size: 17px;
    line-height: 21px;
}

.card-container {
    background-color:  rgb(64, 82, 85);
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


.skills {
    background-color:  rgb(64, 82, 85);
    text-align: center;
    padding: 15px;
    margin-top: 15px;
}

.skills ul {
    margin: 0;
    padding: 0;
    text-align: center;
}

.skills ul li {
    border: 1px solid  rgb(64, 82, 85);
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
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


.widget-area {
    background-color: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    float: left;
    margin-top: 30px;
    padding: 25px 30px;
    position: relative;
    width: 100%;
}

.status-upload {
    background: none repeat scroll 0 0 #f5f5f5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    float: left;
    width: 100%;
}

.status-upload form {
    float: left;
    width: 100%;
}

.status-upload form textarea {
    background: none repeat scroll 0 0 #fff;
    border: medium none;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    -ms-border-radius: 4px 4px 0 0;
    -o-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
    color: #777777;
    float: left;
    font-family: Lato;
    font-size: 14px;
    height: 142px;
    letter-spacing: 0.3px;
    padding: 20px;
    width: 100%;
    resize: vertical;
    outline: none;
    border: 1px solid #F2F2F2;
}

.status-upload ul {
    float: left;
    list-style: none outside none;
    margin: 0;
    padding: 0 0 0 15px;
    width: auto;
}

.status-upload ul>li {
    float: left;
}

.status-upload ul>li>a {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    color: #777777;
    float: left;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    margin: 10px 0 10px 10px;
    text-align: center;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    width: 30px;
    cursor: pointer;
}

.status-upload ul>li>a:hover {
    background: none repeat scroll 0 0 #606060;
    color: #fff;
}

.status-upload form button {
    border: medium none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    float: right;
    font-family: Lato;
    font-size: 14px;
    letter-spacing: 0.3px;
    margin-right: 9px;
    margin-top: 9px;
    padding: 6px 15px;
}

.dropdown>a>span.green:before {
    border-left-color: #2dcb73;
}

.status-upload form button>i {
    margin-right: 7px;
}

</style>
