/**
 * @file FloatHoriz.js
 */
let mf = require('mofron');

module.exports = class extends mf.Layout {

    constructor (po) {
        try {
            super();
            this.name('Float');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    layoutConts (idx, chd) {
        try {
            let idx_len = this.target().child().length-1;
            if (idx === idx_len) {
                /* this is last child */
                if (false === this.isSetNone()) {
                    /* float none is not set yet */
                    this.isSetNone(true);
                    this.target().addChild(this.floatNone());
                } else {
                    /* float none is already setted */
                    if (chd.getId() === this.floatNone().getId()) {
                        /* this child is float-none */
                        return;
                    } else {
                        /* this is not float-none */
                        /* add float-none again */
                        this.floatNone(null);
                        this.target().addChild(this.floatNone());
                    }
                }
            }
            chd.style({ 'float' : 'left' });
                
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    floatNone (fn) {
        try {
            if (undefined === fn) {
                /* getter */
                if (undefined === this.m_lofloat_none) {
                    this.floatNone(new mf.Component());
                }
                return this.m_lofloat_none;
            }
            /* setter */
            if (null === fn) {
                this.m_lofloat_none = undefined;
                return;
            }
            if (false === mf.func.isInclude(fn, 'Component')) {
                throw new Error('invalid parameter');
            }
            fn.style({'float' : 'none'});
            this.m_lofloat_none = fn;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    isSetNone (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                if (undefined === this.m_lofloat_nflg) {
                    return false;
                }
                return this.m_lofloat_nflg
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_lofloat_nflg = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
