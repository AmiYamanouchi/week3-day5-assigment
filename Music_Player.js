let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  /* 1 */
  printAllSongNames: function() {
    // print the names of all the songs to the console
    let songIDs = Object.keys(this.songs);　　　　/* songsの中の全てのキー取得 */
    songIDs.forEach(element => {　　　　　　　　　　/* それぞれのsongsのなかで */
      console.log(this.songs[element].name);　　　/* 表示させる */
    });
    
  },

  /* 2 */
  printSongName: function(songID) {
    // print the name of a song when given its ID
    // console.log(this.songs[songID]);
    console.log(this.songs[songID].name)
    
  },

  /* 3 */
  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID 
    console.log(this.playlists[playlistID].name);
  },

  /* 4 */
  printAllPlaylistNames: function() {
    // Print the names of all the playlists 
    let playlistIDs = Object.keys(this.playlists);
    playlistIDs.forEach(element => {
      console.log(this.playlists[element].name)
    })
  },


  /* 5 */
  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given
    // let arrPlaylist = Object.keys(this.playlists);
    let PlaylistSongs = this.playlists[playlistID].tracks;
    console.log(PlaylistSongs);

    PlaylistSongs.forEach(element => {
      this.printSongName([element])
    });
    
  },

  /* 6 */
  addSong: function(songName, songArtist, songAlbum) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    let newSong = {
      id: library.generateUid(),
      name: songName,
      artist: songArtist,
      album: songAlbum
    }  

    library.songs[newSong.id] = newSong;
    console.log(library.songs);

  },

  /* 7 */
  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.

    console.log(library.playlists[playlistID].tracks.push(songID))
    this.printPlaylistSongs(playlistID)
  },


  /* 8 */
  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.


  },





}



// library.printAllSongNames();   /* 1 */
// library.printSongName('s02');    /* 2 */
// library.printPlaylistName('p01');    /* 3 */
// library.printAllPlaylistNames();    /* 4 */
// library.printPlaylistSongs('p01');    /* 5 */
// library.addSong('aaa','bbb','ccc');    /* 6 */
library.addSongToPlaylist('aaa','bbb','ccc');    /* 6 */
// library.addPlaylist('abc'['aaa','bbb','ccc']);    /* 6 */


// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);

