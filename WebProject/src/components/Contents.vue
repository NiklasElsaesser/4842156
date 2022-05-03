<script setup>
import SectionItem from './SectionItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <SectionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Aktien</template>

  </SectionItem>

  <SectionItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Wetter</template>

  </SectionItem>

  <SectionItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Group Chat</template>

  </SectionItem>

  <SectionItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Instagram</template>

  </SectionItem>

  <SectionItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Spotify</template>

  </SectionItem>
</template>
