<script>
import axios from 'axios'
import { store } from '../store.js'
export default {
      name: 'ContactsView',
      data() {
            return {
                  store,
                  name: '',
                  email: '',
                  message: '',
                  success: false,
                  loading: false,
                  errors: {}
            }
      },
      methods: {
            sendForm() {
                  this.loading = true;
                  this.errors = {};

                  /* console.log('name', this.name);
                  console.log('email', this.email);
                  console.log('message', this.message); */

                  const data = {
                        name: this.name,
                        email: this.email,
                        message: this.message
                  }

                  axios.post(`${this.store.api_base_url}/api/contacts`, data).then((response) => {

                        this.success = response.data.success

                        console.log(response);

                        if (this.success) {
                              this.name = ''
                              this.email = ''
                              this.message = ''
                        }
                        else {
                              this.errors = response.data.errors

                        }
                        this.loading = false
                  })
            }
      }
}
</script>

<template>
      <div>
            <div class="container h-100">
                  <div class="contacts_content row d-flex">
                        <div class="form col-12 col-lg-8">
                              <h2 class="lead">
                                    Contattami per informazioni
                              </h2>
                              <div v-if="success" class="alert alert-success text-start" role="alert">
                                    Messaggio inviato con successo!
                              </div>
                              <form @submit.prevent="sendForm()">
                                    <div class="mb-3">
                                          <label for="name" class="form-label">Nome Cognome *</label>
                                          <input type="text" name="name" id="name" v-model="name" class="form-control"
                                                placeholder="Mario Rossi" aria-describedby="fullNameHelper">
                                          <p v-for="(error, index) in errors.name">
                                                {{ error }}</p>
                                          <small id="fullNameHelper" class="required text-muted">Inserisci il tuo nome
                                                completo</small>
                                    </div>
                                    <div class="mb-3">
                                          <label for="email" class="form-label">Email *</label>
                                          <input type="email" name="email" id="email" v-model="email" class="form-control"
                                                placeholder="mario.rossi@example.com" aria-describedby="emailHelper">
                                          <p v-for="(error, index) in errors.email">
                                                {{ error }}</p>
                                          <small id="emailHelper" class="required text-muted">Inserisci il tuo inidirizzo
                                                email</small>
                                    </div>

                                    <div class="mb-3">
                                          <label for="message" class="form-label">Messaggio *</label>
                                          <textarea class="form-control" name="message" id="message" v-model="message"
                                                rows="5"></textarea>
                                          <p v-for="(error, index) in errors.message">
                                                {{ error }}</p>
                                          <small id="messageHelper" class="required text-muted">Inserisci il tuo
                                                messaggio</small>

                                    </div>
                                    <div class="mb-3">
                                          <small class="required text-muted">I campi contrassegnati con * sono
                                                obbligatori</small>

                                    </div>

                                    <button type="submit" class="btn my-btn" :disabled="loading">
                                          {{ loading ? 'Sending..' : 'Contact me' }}
                                    </button>
                              </form>
                        </div>
                        <div class="contacts_tecnologies col-12 col-lg-4">
                              <h2 class="lead">Le mie tecnologie</h2>
                              <ul class="row row-cols-2 g-2">
                                    <li class="tech_image" v-for="(image, index) in store.arrayTecnologies" :key="index">
                                          <img :src="image.image" alt="">
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

.contacts_content {
      width: 80%;
      margin: auto;
      margin-bottom: 80px;
      padding: 3rem 1rem;
      display: flex;
      justify-content: center;
      box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.8);
      text-shadow: 5px 2px 5px rgb(48, 48, 48);



      .lead {
            text-align: center;
            color: $secondary;
            font-size: 1.8rem;
            margin-bottom: 2rem;
      }

      .required {
            font-style: oblique;
      }

      .contacts_tecnologies {
            text-align: center;
            height: 100%;

            h3 {
                  padding-top: 1rem;
            }


            ul {
                  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.8);
                  display: flex;
                  padding: 1rem;

                  .tech_image {
                        list-style: none;

                        img {
                              width: 80px;
                        }
                  }
            }
      }
}
</style>