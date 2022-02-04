<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Strategi Imóveis</v-toolbar-title>
			<v-spacer></v-spacer>
				<v-avatar
					color="orange"
					size="48"
				> 
						<v-icon dark>
							mdi-account-circle
						</v-icon>
				</v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/user">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item>

					<v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastrar Imóvel</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {

    data: () => ({
			drawer: false,
  
    }),
  }
</script>

<style scoped>
.background{
  background: rgb(237,111,29);
  background: linear-gradient(90deg, rgba(237,111,29,1) 0%, rgba(16,39,50,1) 100%);
}
</style>
