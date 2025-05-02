<script setup lang="ts">
import Search from './components/Search.vue'
</script>

<template>
    <main class='max-w-full sm:max-w-280 pl-8 pr-8 pb-24 lg:pl-32 lg:pr-32 pt-8 ml-auto mr-auto'>
        <nav class='flex flex-row w-fill justify-end items-center'>
            <!-- <a class='ml-4 block' href='mailto:carsonalh@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} class="text-navy text-3xl hover:text-grey transition-colors duration-100" />
            </a> -->
            <!-- <a class='ml-4 block' href='https://github.com/carsonalh'>
                <FontAwesomeIcon icon={faGithub} class="text-navy text-3xl hover:text-grey transition-colors duration-100" />
            </a> -->
            <!-- <a class='ml-4 block' href='https://www.linkedin.com/in/carson-holloway-849b2b197/'>
                <FontAwesomeIcon icon={faLinkedin} class="text-navy text-3xl hover:text-grey transition-colors duration-100" />
            </a> -->
        </nav>

        <section class='mt-12'>
            <h1 class='font-extrabold text-navy text-4xl mb-4'>carson holloway</h1>
            <h2 class='text-grey text-2xl mb-3'>full-stack developer</h2>
            <h3 class='text-lightgrey text-xl mb-3'>brisbane, au</h3>
        </section>

        <section class='mt-12 text-right'>
            <h2 class='font-extrabold text-2xl text-navy mb-2'>this site comes in</h2>
            <div class="flex justify-end gap-4">
                <div class="text-grey">react</div>
                <div class="font-extrabold text-grey">vue</div>
            </div>
        </section>

        <section class='mt-12'>
            <h2 class='font-extrabold text-2xl text-navy mb-8'>my best technologies</h2>
            <ul class='grid grid-rows-2 grid-cols-2 items-end gap-y-6 sm:flex sm:flex-row sm:justify-evenly'>
                <li class='flex flex-col gap-2 items-center text-grey'><img class='sm:max-h-28' src='./assets/nodejs.svg' alt='NodeJS stylised logo' />node js</li>
                <li class='flex flex-col gap-2 items-center text-grey'><img class='sm:max-h-28' src='./assets/typescript.svg' alt='Typescript stylised logo' />typescript</li>
                <li class='flex flex-col gap-2 items-center text-grey'><img class='sm:max-h-28' src='./assets/react.svg' alt='React stylised logo' />react</li>
                <li class='flex flex-col gap-2 items-center text-grey'><img class='sm:max-h-28' src='./assets/go.svg' alt='Go stylised logo' />go</li>
            </ul>
        </section>

        <section class='mt-12'>
            <h2 class='font-extrabold text-2xl text-navy mb-2'>also excellent with</h2>
            <Search />
        </section>

        <section class='mt-12'>
            <h2 class='font-extrabold text-2xl text-navy mb-8'>want to learn more?</h2>
            <p class='text-navy'>
                send me an
                <a class='ml-1' href='mailto:carsonalh@gmail.com'><span class='underline'>email</span> <img class='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>,
                message me on
                <a class='ml-1' href='https://www.linkedin.com/in/carson-holloway-849b2b197/'><span class='underline'>linkedin</span> <img class='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>,
                or <a download class='inline' href='/carson-holloway-full-stack-developer.pdf'><span class='underline'>download my resume</span> <img class='size-3 inline mr-1' src='/arrow-up-right-from-square-solid.svg'/></a>
            </p>
        </section>

    </main>
</template>

