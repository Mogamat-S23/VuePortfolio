    <template>
    <div id="test" class="container">
        <h2>Testimonials</h2>
        <div class="row">
            <!-- <div class="col-4"> -->
                <Testimonials/>
            <!-- </div> -->
        </div>
    </div>
    </template>

    <script>
    import Testimonials from '@/components/test-card.vue'
    export default {
        components: {Testimonials}
    }
    </script>

<style scoped>
    h2{
        color: #0c195d;
        text-decoration: underline;
    }
 </style>