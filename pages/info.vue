<template>
    <main>
        <div class="card mb-3" style="max-width: 700px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://images.wallpaperscraft.com/image/highlands_river_snow_122794_938x1668.jpg" class="card-img">
                </div>
                <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Что такое PrettyImg?</h5>
                        <p class="card-text">
                            Это мини-сервис,который дает возможность получать прекрасные фотографии разной тематики или как говорят многие - фотографии генерируются на рандом. 
                            Также пользователю доступно не только сохранение понравившихся фотографий,а еще он может ввести свой желаемый параметр запроса.
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated {{new Date().toLocaleTimeString()}}</small></p>
                      </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

main > div {
    position: absolute;
    left: 50%;
    top: 25vh;
    transform: translateX(-30%);
}

@media screen and (max-width: 430px) {
    main > div {
        position: static;
        left: 0;
        top: 0;
        transform: none;
    }
}

</style>>
