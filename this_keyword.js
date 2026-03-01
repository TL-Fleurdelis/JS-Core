//medthod -> object
// function -> global(window, global)

const video = {
    title:'JavaScript Basic',
    tags: ['js', 'programming'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
video.showTags(); 