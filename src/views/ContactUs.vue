<template>
    <main>
        <div class="contact-wrap">
        <div class="contact">
            <div>
                <h1>Contact Us</h1>
                <p class="contact-note">Ready to take it to the next level? Let's talk about your project or 
                idea and find out how we can help your business grow. If you are looking 
                for unique digital experiences that's relatable to your users, drop us a line.</p>
            </div>

            <form @submit.prevent="submitForm()">
                    <div class="input-wrap">
                        <label for="name" hidden>Name</label>
                        <input type="text" placeholder="Name" id="name" v-model="name"/>
                        <p class="error" v-if="nameError">
                            <span>Can't be empty</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p>
                    </div>

                    <div class="input-wrap">
                        <label for="email" hidden>Email</label>
                        <input type="text" placeholder="Email" id="email" v-model="email"/>
                        <p class="error" v-if="emailError">
                            <span>Can't be empty</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p> 
                        <p class="error" v-if="invalidEmailError">
                            <span>Invalid Email</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p>
                    </div>

                    <div class="input-wrap">
                        <label for="phone" hidden>Phone</label>
                        <input type="number" placeholder="Phone" id="phone" v-model="phone"/>
                        <p class="error" v-if="phoneError">
                            <span>Can't be empty</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p>
                    </div>
                    
                    <div class="input-wrap" style="margin: 3rem 0 2rem">
                        <label for="message" hidden> Message </label>
                        <textarea type="text" placeholder="Message" id="message" v-model="message"></textarea>
                        <p class="error" v-if="messageError">
                            <span>Can't be empty</span>
                            <img src="./../assets/contact/desktop/icon-error.svg" alt=""/>
                        </p>
                    </div>

                    <WhiteButton callToAction="SUBMIT" buttonRole="submit your form" class="call-to-action"/>
            </form>
        </div>
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
       background-image: url("./../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg");
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

@media screen and (min-width: 520px) {
    .contact {
        padding: 4rem 2.5rem;
    }
}
@media screen and (min-width: 615px) {
    .contact-wrap {
        padding: 0 2.5rem;
    }

    .contact {
        border-radius: 10px;
        padding: 4rem 1.5rem;
        background-size: contain;
        background-image: url("./../assets/contact/desktop/bg-pattern-hero-desktop.svg");

        h1, 
        .contact-note {
            text-align: initial;
            margin: 1.5rem 0;
        }
    }

    .call-to-action {
        margin: 0 0 0 auto;
    }
}

@media screen and (min-width: 700px) {
    .contact {
        border-radius: 10px;
        padding: 4rem;

            h1 {
                font-size: 2.5rem;
             }
    }
}
@media screen and (min-width: 1000px) {
    .contact {
        display: grid;
        grid-template-columns: 50% 45%;
        align-items: center;
        column-gap: 2rem;
        -moz-column-gap: 2rem;
        padding: 0rem 1.5rem 3rem;
    }
}

@media screen and (min-width: 1200px) {
    .contact-wrap {
        padding: 0 8rem;
    }

    .contact {
       padding: 0rem 4rem 3rem;;
        grid-template-columns: 45% 45%;
        column-gap: 4rem;
        -moz-column-gap: 4rem;

        h1 {
            font-size: 3rem;
        }
    }
}

@media screen and (min-width: 1400px) {
    .contact  {
        max-width: 1330px;
        margin: auto;
    }
}
</style>