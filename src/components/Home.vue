<template>
  <div class="column section">
    <div class="tile">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <about />
          <portfolio />
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title" id="contact">Kontakt</p>
            <form class="content" method="POST" action="http://formspree.io/krzysztof@deptula.biz.pl">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" name="email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <textarea name="message" class="textarea"></textarea>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button type="submit" class="button is-success" id="send">
                    Wyślij
                  </button>
                </p>
              </div>
            </form>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-warning">
          <p class="title">Oferta</p>
          <div class="content">
            <p>
              Wykonam wszelkie zadania związane z tworzeniem/utrzymaniem applikacji - zarówno front-, jak i backend. Doskonale radzę sobie zarówno w środowisku webowym, jak i desktopowym - cenię sobie ambitne projekty obejmujące:
              <ul>
                <li>Web Scrapping</li>
                <li>Machine Learning</li>
                <li>Django Rest Framework</li>
                <li>Responsive Web Design</li>
              </ul>
            </p>
          </div>
          <div class="content">
            <p>
              Znam wzorce projektowe i jesem na bieżąco z aktualnie popularnymi narzędziami - dobieram je płynnie zaleznie od projektu, wykorzystując te, które pozwolą wykonać zadanie niezawodnie i na czas.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import About from './tiles/About.vue'
import Portfolio from './tiles/Portfolio.vue'

export default {
  components: {
    About,
    Portfolio
  }
}
</script>

<style></style>
