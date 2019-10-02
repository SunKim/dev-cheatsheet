<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <h5 class="text-faded q-ma-md"><strong>404 Page Not Found</strong></h5>
    <p class="text-faded">페이지를 찾을 수 없습니다.<br />관리자에게 문의해주세요.</p>
    <p>
      <a target="_blank" class="q-link text-blue-grey-6" href="mailto:sjmarine97@gmail.com">
        sjmarine97@gmail.com
      </a>
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="뒤로가기"
      class="q-mt-lg"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
