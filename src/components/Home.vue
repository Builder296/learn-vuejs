<template>
  <div>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
    </b-card>
    <h2>{{ msg }}</h2>
    <b-container fluid>
      <b-row>
        <b-col md="4" class="nopadding-left">
          <b-card no-body>
            <div
              id="nav-scroller"
              ref="content"
              style="position:relative; height:500px; overflow-y:scroll;"
            >
              <b-list-group flush>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
            </div>
          </b-card>
        </b-col>
        <b-col class="nopadding-right">
          <b-card no-body>
            2 of 3
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    msg: 'How are you ?'
  })
}
</script>

<style scoped>
.nopadding-left {
  padding-left: 0 !important;
}
.nopadding-right {
  padding-right: 0 !important;
}
</style>
