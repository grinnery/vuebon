
function capIt(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let getters = {

    byCategory: {
        getGroups: function (baseUrl) {
            let url = baseUrl + '/items/distinct?key=category';
            //console.log(`getGroups: ${url}`);
            return fetch(url).then(resp => resp.json())
            .then(cats => {
                cats = cats.filter(cat => cat).map(cat => {
                    return { _id: cat, title: capIt(cat), desc: ''}
                });
                return cats;
            })
        },

        getItems: function(baseUrl, group) {
            let url = baseUrl + '/items/key/category?q=' + group;
            //console.log(`getItems: ${url}`);
            return fetch(url).then(resp=>resp.json());
        }
    },

    byAlbum: {
        getGroups: function(baseUrl) {
            let url = baseUrl + '/albums';
            //console.log(`getGroups: ${url}`);
            return fetch(url).then(resp=>resp.json());
        },

        getItems: function(baseUrl, group_key) {
            let url = baseUrl + '/albums/items/' + group_key;
            //console.log(`getItems: ${url}`);
            return fetch(url).then(resp=>resp.json());
        }
    }

};

let hosts = [
    'https://api.grin.ly',
    'https://illumere.com'
];

