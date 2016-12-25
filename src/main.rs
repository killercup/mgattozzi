#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
use rocket::response::NamedFile;
use std::path::{Path, PathBuf};

#[get("/public/<file..>")]
fn public(file: PathBuf) -> Option<NamedFile>{
     NamedFile::open(Path::new("src/client/public").join(file)).ok()
}

#[get("/")]
fn site() -> Option<NamedFile> {
    NamedFile::open("src/client/index.html").ok()
}

fn main() {
    // Put site last so that path collision tries others
    // first
    rocket::ignite().mount("/", routes![public, site]).launch();
}
