const gulp = require('gulp');
const concat = require('gulp-concat');


const source = {
    js: {
        app: [
            '../client/modules/main.js',
            '../client/modules/app.js',
            '../client/modules/**/*.module.js',
            '../client/modules/**/*.!(module)*.js'
        ],
        vendor: [
            'node_modules/angular/angular.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/tether/dist/js/tether.min.js',
         'node_modules/bootstrap/dist/js/bootstrap.min.js',
         'node_modules/angular-ui-router/release/angular-ui-router.min.js',
         'node_modules/angular-animate/angular-animate.min.js',
         'node_modules/angular-sanitize/angular-sanitize.min.js',
         'node_modules/angular-touch/angular-touch.min.js',
         'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
        ]
    }
}

const destination = '../client/build';

gulp.task('app.js', ()=>{
    return gulp.src(source.js.app)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(destination));
})

gulp.task('vendor.js', ()=> {
    return gulp.src(source.js.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(destination));
})

gulp.task('default', ['app.js', 'vendor.js']);

const appWatcher = gulp.watch(source.js.app, ['app,js']);
appWatcher.on('change', (event)=>{
    console.log(`File ${event.type} was ${event.type}, running tasks..`);
});