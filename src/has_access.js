export default function (roles = {}, default_fail = (req, res, next) => next()) {
    return function (allowed_roles = [], required_access = [], fail = default_fail) {
        return function (req, res, next) {
            var user = {
                access: ['user:create',  'user:view']
            };

            if (allowed_roles.length && !check_role(roles, allowed_roles, user.access)) {
                return fail(req, res, next);
            }

            if (required_access.length && !check_access(user.access, required_access)) {
                return fail(req, res, next);
            }

            return next();
        }
    }
};

function check_role (roles, allowed_roles, user_access) {
    for (let i = 0; i < allowed_roles.length; i++) {
        let role = allowed_roles[i];

        if ('undefined' !== typeof roles[role] && check_access(user_access, roles[role])) {
            return true;
        }
    }

    return false;
}


function check_access (user_access, required_access) {
    var merge_access = merge(user_access, required_access);

    return merge_access.length === user_access.length;
};

function merge() {
    var args = arguments,
    hash = {},
    arr = [];

    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            if (hash[args[i][j]] !== true) {
                arr[arr.length] = args[i][j];
                hash[args[i][j]] = true;
            }
        }
    }

   return arr;
}
