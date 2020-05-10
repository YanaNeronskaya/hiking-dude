import React, { FC, useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { userSignUp } from '../../../graphql/mutations/user';
import { getCurrentUser } from '../../../graphql/queries/user';
import { USER_ROUTES } from '../../../../constants/routes';

// @ts-ignore
import css from '../login-form/login-form.module.scss';

type SignUpFormContentProps = {
    handleFormSubmit: () => any;
    mutate: any;
    data: any;
};

const getErrorDisplayText = (errorMsg: string) => {
    if (errorMsg.search('Email in use') !== -1) {
        return 'It seems, the current email is already in use. Please, select anothe one.';
    }

    return '';
};

const SignUpFormContent: FC<SignUpFormContentProps> = ({
    handleFormSubmit,
    mutate,
    data
}) => {
    const history = useHistory();
    const [name, changeName] = useState('');
    const [surname, changeSurname] = useState('');
    const [residence, changeResidence] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [errors, changeErrors] = useState([]);

    useEffect(() => {
        if (data && data.user && data.user.email) {
            history.push(USER_ROUTES.USER_CABINET);
        }
    }, [data]);

    const onFormSubmit = (e: React.FormEvent) => {
        event.preventDefault();

        mutate({
            variables: { name, surname, residence, email, password },
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
                type="text"
                name="name"
                placeholder="name"
                value={name}
                className={classNames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changeName(e.target.value)}
                required
            />
            <input
                type="text"
                name="surname"
                placeholder="surname"
                value={surname}
                className={classNames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changeSurname(e.target.value)}
                required
            />
            <input
                type="text"
                name="residence"
                placeholder="residence"
                value={residence}
                className={classNames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changeResidence(e.target.value)}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                className={classNames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changeEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                className={classNames({
                    [css.inputField]: true,
                    [css.inputFieldSelected]: !!email,
                })}
                onChange={e => changePassword(e.target.value)}
                required
            />
            <div className={css.errorsBlock}>
                {errors.map(err => (
                    <div key={err}>{getErrorDisplayText(err)}</div>
                ))}
            </div>
            <button type="submit" className={css.submitBtn}>
                Submit
            </button>
            <button type="button" className={css.returnBtn}>
                Return
            </button>
        </form>
    );
};

export const SignUpForm = graphql(getCurrentUser)(
    graphql(userSignUp)(SignUpFormContent)
);
