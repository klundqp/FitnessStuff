<script setup lang="ts">
import NavbarBrand from "./subcomponents/NavbarBrand.vue";
import Navbar from "./subcomponents/Navbar.vue";
import NavbarNav from "./subcomponents/NavbarNav.vue";
import NavItem from "./subcomponents/NavItem.vue";
</script>
<template>
  <div>
    <Navbar class="navigationBar" type="dark" variant="secondary">
      <NavbarBrand class="navbarBrand" :to="{ path: '/' }"
        >FitnessStuff</NavbarBrand
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#NavbarNav"
        aria-controls="NavbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavbarNav id="NavbarNav" class="ml-auto">
        <NavItem class="nav-item" :to="{ path: '/' }"
          >Forside
        </NavItem>
        <NavItem class="nav-item" :to="{ path: '/cookie-og-privatlivspolitik/' }"
          >CookieIndstillinger
        </NavItem>
        <!-- <NavItem class="nav-item" :to="{ path: '/period' }"
          >Perioder
        </NavItem>
        <NavItem class="nav-item" :to="{ path: '/invoice' }"
          >Afventende
        </NavItem>
        <NavItem class="nav-item" :to="{ path: '/upload' }"
          >Upload
        </NavItem>
        <NavItem class="nav-item" :to="{ path: '/accountants-statements/'}">
          Revisorerklæringer
        </NavItem>
        <NavItem class="nav-item" :to="{ path: '/settings/'}">
          Indstillinger
        </NavItem> -->
      </NavbarNav>
    </Navbar>
  </div>
</template>
