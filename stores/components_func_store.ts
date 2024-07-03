export const componentsFuncStore = defineStore("componentsFuncStore", () => {
    const fullReviewsRef = ref();
    const rbMenu = ref();
    const topBar = ref();
    const aboutRef = ref();
    const noticeRef = ref();

    const showReviews = () => {
        if (document.querySelector("#full-reviews")!.classList.contains("active")) {
            document.querySelector("#full-reviews")!.classList.remove("active");
        } else {
            document.querySelector("#full-reviews")!.classList.add("active");
        }
        if (document.querySelector("#rb-menus")!.classList.contains("hide")) {
            document.querySelector("#rb-menus")!.classList.remove("hide");
        } else {
            document.querySelector("#rb-menus")!.classList.add("hide");
        }

        if (document.querySelector("#topbar")!.classList.contains("hide")) {
            document.querySelector("#topbar")!.classList.remove("hide");
        } else {
            document.querySelector("#topbar")!.classList.add("hide");
        }
    };

    const showAbout = () => {
        if (document.querySelector("#full-desc")!.classList.contains("active")) {
            document.querySelector("#full-desc")!.classList.remove("active");
        } else {
            document.querySelector("#full-desc")!.classList.add("active");
        }
        if (document.querySelector("#rb-menus")!.classList.contains("hide")) {
            document.querySelector("#rb-menus")!.classList.remove("hide");
        } else {
            document.querySelector("#rb-menus")!.classList.add("hide");
        }

        if (document.querySelector("#topbar")!.classList.contains("hide")) {
            document.querySelector("#topbar")!.classList.remove("hide");
        } else {
            document.querySelector("#topbar")!.classList.add("hide");
        }
    };

    const showNotice = () => {
        if (document.querySelector("#notice")!.classList.contains("active")) {
            document.querySelector("#notice")!.classList.remove("active");
        } else {
            document.querySelector("#notice")!.classList.add("active");
        }

        if (document.querySelector("#rb-menus")!.classList.contains("hide")) {
            document.querySelector("#rb-menus")!.classList.remove("hide");
        } else {
            document.querySelector("#rb-menus")!.classList.add("hide");
        }
    };
    return {
        showReviews,
        showNotice,
        showAbout,
        noticeRef,
        topBar,
        rbMenu,
        fullReviewsRef,
        aboutRef,
    }
})