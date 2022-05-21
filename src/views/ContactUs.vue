<template>
    <main>
        <div class="contact">
            <h1>Contact Us</h1>
            <p class="contact-note">Ready to take it to the next level? Let's talk about your project or 
            idea and find out how we can help your business grow. If you are looking 
            for unique digital experiences that's relatable to your users, drop us a line.</p>
        

            <form @submit.prevent="submitForm()">
                    <div class="input-wrap">
                        <input type="text" placeholder="Name" v-model="name"/>
                        <p class="error" v-if="nameError">
                            <span>Can't be empty</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p>
                    </div>

                    <div class="input-wrap">
                        <input type="text" placeholder="Email" v-model="email"/>
                        <p class="error" v-if="emailError">Can't be empty</p> 
                        <p class="error" v-if="invalidEmailError">Invalid Email</p>
                    </div>

                    <div class="input-wrap">
                        <input type="number" placeholder="Phone" v-model="phone"/>
                        <p class="error" v-if="phoneError">Can't be empty</p>
                    </div>
                    
                    <div class="input-wrap" style="margin: 3rem 0 2rem">
                        <textarea type="text" placeholder="Message" v-model="message"></textarea>
                        <p class="error" v-if="messageError">Can't be empty</p>
                    </div>

                    <WhiteButton callToAction="SUBMIT" buttonRole="submit your form"/>
            </form>
        </div>
        <LocationLinks />
    </main>
    
</template>

<script>
import LocationLinks from '../components/LocationLinks.vue';
import WhiteButton from '../components/WhiteButton.vue'
export default {
    name: 'Contact Us',
    components: { LocationLinks , WhiteButton },
    data () {
        return {
            name: "",
            email: "",
            message: "",
            nameError: false,
            emailError: false,
            invalidEmailError: false,
            messageError: false,
        }
    }, 
    methods: {
        validEmail (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        submitForm () {
            /*******FORM VALIDATION FOR NAME INPUT FIELD */
            if(!this.name) { //if email field is empty
                this.nameError = true //show error message
            }else {
                this.nameError = false //remove error message if input field isn't empty
            }
            
            /*******FORM VALIDATION FOR EMAIL INPUT FIELD */
            if(!this.email) {  //if email field is empty
                this.emailError = true  //show "can't be empty"
            } else if (!this.validEmail(this.email)) {   //if it isn,t empty but its invalid
                    this.invalidEmailError = true  // show "invalid email"
                    this.emailError = false   //remove cant be empty since it's not empty, just invalid
            } else {
                this.emailError = false
                this.invalidEmailError = false
            }

            /*******FORM VALIDATION FOR PHONE INPUT FIELD */
            if(!this.phone) { //if email field is empty
                this.phoneError = true //show error message
            }else {
                this.phoneError = false //remove error message if input field isn't empty
            }
            
            /*******FORM VALIDATION FOR MESSAGE TEXTAREA */
            if(!this.message) {
                this.messageError = true  //show error message
            }else {
                this.messageError = false
            }        
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/partials/_partial.scss';
    .contact {
        @include bgImage;
       background-size: cover;
       background-image: url("./../assets/about/mobile/bg-pattern-hero-about-mobile.svg");
       padding: 4rem 1.5rem;

        h1, 
        .contact-note {
            @extend %align-white-text;
            margin: 1.5rem 0;
        }
    }
   
   input,
    textarea {
        outline: 0;
        border: 0;
    }

    .input-wrap {
        @include flex;
        margin-top: 1.5rem;
        border-bottom: 1px solid #fff;  
    }

    input,
    textarea {
        width: 100%;
        color: #fff;
        font-size: 1rem;
        padding: 1rem 0 1rem 1rem;
        background-color: initial;
    }

    input::placeholder,
    textarea::placeholder {
        font-size: .9rem;
        font-weight: 500;
        color: #fff;
        opacity: 0.5;
    }

    .input-wrap:hover {
        border-bottom: 2px solid #fff; 
    }

    .error {
        @include flex;
    }
    .error span{
        width: 82px;
        color: #fff;
        font-size: .7rem;
    }
</style>