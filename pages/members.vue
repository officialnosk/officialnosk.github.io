<template>
  <div>
    <Member
      v-for="(member, index) in members"
      :key="index"
      :datas="member.datas"
    >
      Member of Nosk Team Nosk {{ member.year }}
    </Member>
  </div>
</template>

<script>
import Member from '~/components/Member.vue'
export default {
  data() {
    return {
      members: [
        {
          year: 2017,
          datas: [
            {
              rollno: 171501,
              name: 'Nosk Nosk',
              picture: 'nosk.jpg',
              urls: 'http://nosk.info',
            },
          ],
        },
      ],
    }
  },
  component: {
    Member,
  },
}
</script>
