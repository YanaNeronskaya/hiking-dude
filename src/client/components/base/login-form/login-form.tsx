import React, { FC, useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { userLogIn } from '../../../graphql/mutations/user';
import { getCurrentUser } from '../../../graphql/queries/user';
import { USER_ROUTES } from '../../../../constants/routes';

// @ts-ignore
import css from './login-form.module.scss';

type LoginFormContentProps = {
    handleFormSubmit: () => any;
    data: any;
    mutate: any;
};

const getErrorDisplayText = (errorMsg: string) => {
    if (errorMsg.search('Invalid credentials')) {
        return 'It seems, the email or password incorrect. Please, try again.';
    }

    return '';
};

const LoginFormContent: FC<LoginFormContentProps> = ({
    handleFormSubmit,
    mutate,
    data,
}) => {
    const history = useHistory();
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [errors, changeErrors] = useState([]);

    useEffect(() => {
        if (data && data.user && data.user.email) {
            history.push(USER_ROUTES.SIGN_IN);
        }
    }, [data]);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({
            variables: { email, password },
            refetchQueries: [
                {
                    query: getCurrentUser,
                },
            ],
        }).catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            changeErrors(errors);
        });
        handleFormSubmit();
    };

    return (
        <form onSubmit={onFormSubmit} className={css.form}>
            <input
                type="email"
                placeholder="email"
                value={email}
                className={classnames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changeEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                className={classnames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!password,
                })}
                onChange={e => changePassword(e.target.value)}
                required
            />
            <div className={css.errorsBlock}>
                {errors.map(err => (
                    <span key={err}>{getErrorDisplayText(err)}</span>
                ))}
            </div>
            <button
                type="submit"
                className={css.submitBtn}
            >
                Submit
            </button>
            <button type="button" className={css.returnBtn}>
                Return
            </button>
        </form>
    );
};

export const LoginForm = graphql(getCurrentUser)(
    graphql(userLogIn)(LoginFormContent)
);
