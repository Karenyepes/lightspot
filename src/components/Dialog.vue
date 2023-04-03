<template>
    <v-dialog
        v-model="show"
        persistent
        max-width="290"
    >
        <v-card>
            <v-card-title>
                {{ title }}
            </v-card-title>
            <v-card-text>
                {{ message }}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click="close"
                    v-if="isConfirm"
                >
                    Cancel
                </v-btn>
                <v-btn 
                    class="btn-primary"
                    @click="confirm"
                >
                    Agree
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters("dialog", ["show", "title", "message", "isConfirm"])
    },
    methods: {
        ...mapActions("dialog", ["close", "confirm"])
    }
}
</script>