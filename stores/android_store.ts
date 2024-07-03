import { defineStore } from "pinia";
import { ref } from "vue";


export const androidAssetsStore = defineStore("androidStore", () => {


    const name = ref(useCookie('name').value);
    const fbqKey = ref((useCookie("fbqKey").value ?? ""));
    const onesignalKey = ref((useCookie("onesignalKey").value ?? ""));
    const offerLink = ref((useCookie("offerLink").value ?? ""));
    const description = ref((useCookie("description").value ?? ""));
    const screens = ref((useCookie("screens").value ?? ""));
    const iconUrl = ref((useCookie("iconUrl").value ?? ""));
    const subtitle = ref((useCookie("subtitle").value ?? ""));
    const ratings = ref((useCookie("ratings").value ?? ""));
    const ratingsLength = ref((useCookie("ratingsLength").value ?? ""));
    const installNumbers = ref((useCookie("installNumbers").value ?? ""));
    const shortDescription = ref(
        (useCookie("shortDescription").value ?? "")
    );
    const tags = ref((useCookie("tags").value ?? ""));
    const version = ref((useCookie("version").value ?? "0"));
    const updatedTime = ref((useCookie("updatedTime").value ?? ""));
    const size = ref((useCookie("size").value ?? ""));
    const developer = ref((useCookie("developer").value ?? ""));
    const releasedTime = ref((useCookie("releasedTime").value ?? ""));
    const website = ref((useCookie("website").value ?? ""));
    const reviews = ref<any>(useCookie("reviews").value ?? []);
    const icons = ref<any>(useCookie("icons").value ?? []);
    const favicon = ref<any>(useCookie("favicon").value ?? []);


    return {
        favicon,
        icons,
        website,
        name,
        reviews,
        releasedTime,
        developer,
        size,
        updatedTime,
        version,
        tags,
        shortDescription,
        installNumbers,
        ratingsLength,
        subtitle,
        fbqKey,
        description,
        screens,
        iconUrl,
        ratings,
        onesignalKey,
        offerLink,
    };
});
