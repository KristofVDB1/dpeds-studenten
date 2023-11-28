<template>
  <navigation />
  <div class="error">
    <h1>404 - pagina niet gevonden</h1>
  </div>
  <div class="footer">
    <c-footer />
  </div>
</template>

<style>
.error {
  display: flex;
  height: 100%;
  margin: auto auto;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer {
  bottom: 0;
  width: 100%;
  position: absolute;
}
</style>
