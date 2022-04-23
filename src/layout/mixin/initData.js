import {format} from 'date-fns';

export default {
    data () {
        return {
            page: 1, size: 10, total: 0, tableData: [], loading: false,
            pageSizes: [10, 20, 50, 100],
            layout: "total, sizes, prev, pager, next, jumper",
        }
    },
    methods: {
        async initList () {
            if (! await this.beforeInit()) {
                return;
            }
            this.loading = true;
            this.fn(this.params).then(res => {
                console.log('res================')
                console.log(res)
                console.log('res================')
                if (res.status === 200) {
                    res.data.users = this.formatTime(res.data.resData);
                    this.total = res.data.pageInfo.total;
                    this.tableData = res.data.resData;
                }
                this.loading = false;
            })
        },
        handleChangeSize (e) {
            this.size = e;
            this.initList();
        },
        handChangePage (e) {
            this.page = e;
            this.initList();
        },
        // 过滤日期
        formatTime (sourceArr) {
            return sourceArr.map(item => {
                if (!item.create_time) {
                    return ;
                }
                item.create_time = format(new Date(item.create_time), 'yyyy-MM-dd HH:mm:ss');
                return item;
            })
        }
    }
}
