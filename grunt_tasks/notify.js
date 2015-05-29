module.exports = function (grunt) {
    grunt.config('notify', {
        watch: {
            options: {
                //title: 'Task Complete', // optional
                message: 'Update from watch', //required
                duration: 1 // the duration of notification in seconds, for `notify-send only
            }
        },
        build: {
            options: {
                //title: 'Task Complete', // optional
                message: 'Build completed', //required
            }
        }
    });
    
    grunt.config('notify_hooks', {
        options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            //title: "Project Name", // defaults to the name in package.json, or will use project directory's name
            success: true, // whether successful grunt executions should be notified automatically
            duration: 3 // the duration of notification in seconds, for `notify-send only
        }
    });
    
    grunt.task.run('notify_hooks');
};