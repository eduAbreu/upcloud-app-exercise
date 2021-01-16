import css from 'styled-jsx/css';

const styles = css`
    @import 'rem';
    @import 'color';

    .server-content {
        display: flex;
        align-items: center;

        &:hover {
            .server-state {
                animation: pulse 0.6s ease-in-out infinite alternate;
            }
        }
    }

    .server-state {
        width: rem(20px);
        height: rem(20px);
        border-radius: rem(4px);
    }

    .server-state--stopped {
        background: #fc0000;
    }

    .server-state--started {
        background: #00ff00;
    }

    .server-data {
        margin-left: rem(15px);

        p {
            margin-bottom: 0;
            line-height: 1.2;
        }

        span {
            font-size: rem(12px);
            color: color(grey, base);
        }
    }

    @keyframes pulse {
        0% {
        transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export default styles;
