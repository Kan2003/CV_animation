var t1 = gsap.timeline({
    scrollTrigger:{
        trigger : "#main",
        start : "30% 30%",
        end : "70% 90%",
        markers : true,
        scrub : true,
    }
})

t1.to("#img2",{
    rotateX : "0deg"
})
.to("#img3",{
    rotateX : "0deg"
})
.to("#resume",{
    marginTop : "50vh",
    scale : "0.8"
},'a')
.to(".img",{
    filter : "greyScale(1)",
},'a')
.to("#text",{
    marginTop : "-110vh",
},'a')
.to(".overlay",{
    opacity : 1,
},'a')
