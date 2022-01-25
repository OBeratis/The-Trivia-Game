<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import QuestionList from "../components/QuestionList.vue";
import Navbar from "../components/Navbar.vue";

const OPEN_DB_URL = "https://opentdb.com/api.php"

const router = useRouter()
const store = useStore()

let url = `${OPEN_DB_URL}`

// Class to store user questions answer
function QuestionCollection() {
    this.correct_answer = '';
    this.user_answer = '';
    this.question = '';
    this.offered_questions = [] 
};

// Fetch questions from OPEN DB
onMounted( async() => {
 
  url += `?amount=${store.state.numberOfQuestions}`

  if (store.state.category !== '') {
    url += `&category=${store.state.category}`
  }

  switch (store.state.difficult) {
    case '1': url += '&difficulty=easy'; break;
    case '2': url += '&difficulty=medium'; break;
    case '3': url += '&difficulty=hard'; break;
  }

  switch (store.state.type) {
    case '1': url += '&type=multiple'; break;
    case '2': url += '&type=boolean'; break;
  }

  try {
      const response = await fetch(url)

      if (!response.ok)
      {
          console.log("Could not find questions!")
      }

      const { response_code, results, error = "Could not fetch questions!" } = await response.json()

      if (response_code === 0) {
          console.log('OK')
      } else {
          console.log(error)
      }

      store.commit('setQuestions', results)

      let questionCollection = new QuestionCollection();
      let offerQuestionList = []

      results.forEach(element => {
        questionCollection = new QuestionCollection();
        offerQuestionList = []
        
        element.incorrect_answers.forEach(element => {
          offerQuestionList.push(element);        
        });
        offerQuestionList.push(element.correct_answer);
        
        questionCollection.offered_questions = offerQuestionList
        questionCollection.question = element.question
        questionCollection.correct_answer = element.correct_answer

        store.commit('setToQuestionCollection', questionCollection)
      });

      return [null, results ]
  } catch (e) {
      return [e.message, [] ]
  } 

})

const onShowResult = () => {
  router.push('/Result')
}

</script>

<template>
    <Navbar :showSearch="false" :showResult="true" />
    <main class="container mx-auto px-4">
      <QuestionList />
    </main>
</template>