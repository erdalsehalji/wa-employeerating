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

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
    margin-bottom: 20px;
}


.skills {
      background-image: linear-gradient(rgb(70, 100, 110),rgb(64, 83, 90), rgb(69, 129, 118),rgb(51, 104, 122));;
    text-align: center;
    padding: 15px;
    margin-top: 15px;
    
}

.skills ul {
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%
}

.skills ul li {
    border: 2px solid  rgb(9, 139, 161);
    border-radius: 30px 10px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
}


footer p {
    margin: 10px 0;
}


footer a {
    color: #3c97bf;
    text-decoration: none;
}


.widget-area {
    background-image: linear-gradient(rgb(38, 99, 116), rgb(55, 114, 128));
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    -o-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    float: left;
    padding: 10px 10px;
    border-radius: 20px 10px;
    position: relative;
    width: 100%;
}

.status-upload {
     background-image: linear-gradient(rgb(48, 86, 102), rgb(44, 119, 136));
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
    color: #1a5588;
    float: left;
    font-family: Lato;
    font-size: 14px;
    height: 100px;
    letter-spacing: 0.3px;
    padding: 20px;
    width: 100%;
    resize: vertical;
     border-radius: 50px 20px;
    outline: none;
    border: 2px solid #194a85;
}

.status-upload ul {
    float: left;
    list-style: none outside none;
    margin: 0;
    padding: 0 0 0 0px;
    width: auto;
}

.status-upload ul>li {
    float: left;
}



.status-upload ul>li>a:hover {
    background: none repeat scroll 0 0 #606060;
    color: rgb(107, 33, 33);
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
