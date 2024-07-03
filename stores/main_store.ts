import { androidAssetsStore } from "@/stores/android_store";
import axios from 'axios'


export const mainStore = defineStore("mainStore", () => {

    const router = useRouter();
    const route = useRoute();
    const startScanVirus = ref(false);
    const androidStore: any = androidAssetsStore();
    const installLoading = ref<boolean>(false);
    const installProcess = ref<number>(0)
    const openWeb = ref(false);
    const preparingProcess = ref<number>(0)
    const installTimer = ref<number>(10);
    const installed = ref();
    const showOffer = ref()
    const redirectToGoogle = ref(false);
    const userDevice = ref<string>("other");
    const language = ref();
    const page = ref(useCookie("page") ?? null);
    const generateDataManifest = () => {
        useHead({
            link: [
                { rel: 'icon', type: 'image/x-icon', href: androidStore.favicon }
            ],
            title: androidStore.name
        })
        return {
            name: androidStore.name,
            short_name: androidStore.name,
            url: androidStore.website,
            descriptions: androidStore.shortDescription,
            origin: androidStore.website,
            icons: {
                "512": androidStore.icons["512"],
                "384": androidStore.icons['384'],
                "256": androidStore.icons['256'],
                "192": androidStore.icons['192']
            }
        };

    }

    const generateLink = () => {

        try {
            const params: any = useCookie("params").value!;
            const naming = params.c.split("_")
            const link = androidStore.offerLink + `?sub_id_3=${params.fbq}&sub_id_10=${params.fbclid}&sub_id_2=${naming[1]}`
            androidStore.offerLink = link;
            useCookie("offerLink").value = link;
        } catch (e) {

        }


    }


    const fbEvent = () => {
        // //@ts-ignore
        // !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        //     if (f.fbq) return;
        //     n = f.fbq = function () {
        //         n.callMethod
        //             ? n.callMethod.apply(n, arguments)
        //             : n.queue.push(arguments);
        //     };
        //     if (!f._fbq) f._fbq = n;
        //     n.push = n;
        //     n.loaded = !0;
        //     n.version = "2.0";
        //     n.queue = [];
        //     t = b.createElement(e);
        //     t.async = !0;
        //     t.src = v;
        //     s = b.getElementsByTagName(e)[0];
        //     s.parentNode.insertBefore(t, s);
        // })(
        //     window,
        //     document,
        //     "script",
        //     "https://connect.facebook.net/en_US/fbevents.js"
        // );
        // //@ts-ignore
        // window?.fbq("init", androidStore.fbqKey);
        // //@ts-ignore
        // window?.fbq("track", "PageView");
    };
    const init = async () => {
        if (!useCookie("page").value) {
            if (route.query.page) {
                page.value = route.query.page.toString();
                useCookie("page").value = JSON.stringify(route.query.page);
            } else {
                return router.replace("/404")
            }
        }
        if (!useCookie("params").value) {
            useCookie("params").value = JSON.stringify(route.query);
        }
        if (!useCookie("load.resources").value) {
            isFbOrInst();
            getUserDevice();
        }
        if (import.meta.client) {
            if (localStorage.getItem("installed") || localStorage.getItem("showOffer")) {
                router.push("/offer")
            } else {
                if (!useCookie("load.resources").value) {
                    await getAppInfo();
                    await $fetch("/api/hello", {
                        method: 'post',
                        body: generateDataManifest()
                    })
                }
                installed.value =
                    localStorage.getItem("installed") !== null ? true : false;
                showOffer.value =
                    localStorage.getItem("showOffer") !== null ? true : false;
                router.push("/android")
            }
        }
    }

    const isFbOrInst = () => {
        if (navigator.userAgent.indexOf("instagram") > -1 || navigator.userAgent.indexOf("FB") > -1) {
            redirectToGoogle.value = true;
        }
    };

    const startPreparing = () => {
        startScanVirus.value = true
        let interval = setInterval(() => {
            preparingProcess.value = preparingProcess.value + 0.1;
        }, 15);
        setTimeout(async () => {
            startScanVirus.value = false;
            // if (!useNuxtApp().$pwa?.showInstallPrompt) {
            //     return reloadNuxtApp();
            // }
            openWeb.value = true;
            preparingProcess.value = 0;
            clearInterval(interval);
        }, 15000);
    };


    const getAppInfo = async () => {
        const reviews = [];

        try {

            const response = await axios.get(`http://localhost:5431/pwa/get/${page.value}`);
            getLanguage(response.data["languages"]);
            if (response.data) {
                for (let key in response.data) {
                    if (typeof response.data[key] == 'object') {
                        if (key == "reviews") {
                            for (let j = 0; j < response.data['reviews']["comment"].length; j++) {
                                reviews.push({
                                    date: response.data['reviews']["comment"][j]["date"],
                                    imageUrl: response.data['reviews']["comment"][j]["imageUrl"],
                                    name: response.data['reviews']["comment"][j]["name"][language.value],
                                    reviews: response.data['reviews']["comment"][j]["reviews"][language.value],
                                });

                            }
                        }

                        androidStore[key] = response.data[key][language.value];
                        useCookie(key).value = JSON.stringify(
                            response.data[key][language.value]
                        );

                    } else {
                        useCookie(key).value = JSON.stringify(
                            response.data[key]
                        );
                        androidStore[key] = response.data[key];

                    }
                }
                useCookie('reviews').value = JSON.stringify(
                    reviews
                );
                androidStore['reviews'] = reviews;
            } else {
                console.log("pwa not found");
            }
            return response.data
        } catch (e) {
            console.log(e);
        }
    };


    const getLanguage = (languages: any) => {
        try {
            const userLanguage = window.navigator.language;
            const isHaveLanguage = languages.find((item: any) => item == userLanguage)
            if (isHaveLanguage) {
                language.value = userLanguage;
            } else {
                language.value = "en";
            }
        } catch (e) {
            language.value = "en";
        }
    };

    const getUserDevice = () => {
        try {
            if (navigator.userAgent.indexOf("Android") !== -1) {
                userDevice.value = "Android";
            } else {
                userDevice.value = "other";
            }
        } catch (e) {
            userDevice.value = "other";
        }



    };

    return {
        fbEvent,
        generateLink,
        startPreparing,
        startScanVirus,
        getAppInfo,
        init,
        openWeb,
        userDevice,
        installProcess,
        getUserDevice,
        installTimer,
        installed,
        showOffer,
        installLoading,
        getLanguage,
        redirectToGoogle,
        preparingProcess,

    }
})