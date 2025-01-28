import * as React from "react";
import type { Meta } from "@storybook/react";

import { AdobeAcrobat } from "./AdobeAcrobat";
import { Calendar } from "./Calendar";
import { Star } from "./Star";
import { StarFilled } from "./StarFilled";
import { SquareUpLeft } from "./SquareUpLeft";
import { Minus } from "./Minus";
import { SquareArrowDownRight } from "./SquareArrowDownRight";
import { SquareCaretUp } from "./SquareCaretUp";
import { SquareArrowUpLeft } from "./SquareArrowUpLeft";
import { SquareCaretDown } from "./SquareCaretDown";
import { SquareDownRight } from "./SquareDownRight";
import { Slash } from "./Slash";
import { SliderUp } from "./SliderUp";
import { Snowflake } from "./Snowflake";
import { Send } from "./Send";
import { SidebarLeft } from "./SidebarLeft";
import { Sigma } from "./Sigma";
import { Selected } from "./Selected";
import { Refresh } from "./Refresh";
import { ScaleBalanced } from "./ScaleBalanced";
import { Question } from "./Question";
import { Reply } from "./Reply";
import { RePost } from "./RePost";
import { RolePermission } from "./RolePermission";
import { Projects } from "./Projects";
import { QCApprove } from "./QCApprove";
import { ListSearch } from "./ListSearch";
import { CircleChecked } from "./CircleChecked";
import { PaintBrush } from "./PaintBrush";
import { Pencil } from "./Pencil";
import { Plus } from "./Plus";
import { Print } from "./Print";
import { ProductionSchedule } from "./ProductionSchedule";
import { Progress } from "./Progress";
import { Members } from "./Members";
import { SquareMinus } from "./SquareMinus";
import { Move } from "./Move";
import { NoteBadge } from "./NoteBadge";
import { Note } from "./Note";
import { ObjectGroup } from "./ObjectGroup";
import { Magnifier } from "./Magnifier";
import { MagnifierPlus } from "./MagnifierPlus";
import { MagnifierMinus } from "./MagnifierMinus";
import { MapPin } from "./MapPin";
import { Measuring } from "./Measuring";
import { LinkSlash } from "./LinkSlash";
import { Link } from "./Link";
import { List } from "./List";
import { LiftTruck } from "./LiftTruck";
import { LockOpen } from "./LockOpen";
import { Lock } from "./Lock";
import { ArrowLeftToLine } from "./ArrowLeftToLine";
import { Import } from "./Import";
import { InstallGlass } from "./InstallGlass";
import { InstallRail } from "./InstallRail";
import { LayerGroup } from "./LayerGroup";
import { Library } from "./Library";
import { Image } from "./Image";
import { Gear } from "./Gear";
import { Google } from "./Google";
import { GridDividers } from "./GridDividers";
import { Grip } from "./Grip";
import { Grid } from "./Grid";
import { House } from "./House";
import { Save } from "./Save";
import { FileChart } from "./FileChart";
import { FileChartColumn } from "./FileChartColumn";
import { FileExcel } from "./FileExcel";
import { FileLines } from "./FileLines";
import { Filter } from "./Filter";
import { FilterCircleXMark } from "./FilterCircleXMark";
import { FilterSlash } from "./FilterSlash";
import { FlagPennant } from "./FlagPennant";
import { FolderClosed } from "./FolderClosed";
import { FolderOpen } from "./FolderOpen";
import { Elipsis } from "./Elipsis";
import { ElipsisVertical } from "./ElipsisVertical";
import { ElipsisVerticalStroke } from "./ElipsisVerticalStroke";
import { Email } from "./Email";
import { Exclusion } from "./Exclusion";
import { Expand } from "./Expand";
import { Export } from "./Export";
import { Eye } from "./Eye";
import { EyeSlash } from "./EyeSlash";
import { Comments } from "./Comments";
import { Company } from "./Company";
import { Connect } from "./Connect";
import { Copy } from "./Copy";
import { Dashboard } from "./Dashboard";
import { Deficiency } from "./Deficiency";
import { DeficiencyList } from "./DeficiencyList";
import { Download } from "./Download";
import { Driver } from "./Driver";
import { CircleDollar } from "./CircleDollar";
import { CircleInfo } from "./CircleInfo";
import { CirclePlus } from "./CirclePlus";
import { CircleXmark } from "./CircleXmark";
import { Clock } from "./Clock";
import { Comma } from "./Comma";
import { Clone } from "./Clone";
import { CommentsBadge } from "./CommentsBadge";
import { ChevronDown } from "./ChevronDown";
import { ChevronRight } from "./ChevronRight";
import { ChevronUp } from "./ChevronUp";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronsDown } from "./ChevronsDown";
import { ChevronsLeft } from "./ChevronsLeft";
import { ChevronsRight } from "./ChevronsRight";
import { ChevronsUp } from "./ChevronsUp";
import { Bars } from "./Bars";
import { Ban } from "./Ban";
import { Bell } from "./Bell";
import { BarsSort } from "./BarsSort";
import { Board } from "./Board";
import { Breakdown } from "./Breakdown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowRightFromLine } from "./ArrowRightFromLine";
import { ArrowRotateRight } from "./ArrowRotateRight";
import { ArrowsInward } from "./ArrowsInward";
import { ArrowsOutward } from "./ArrowsOutward";
import { ArrowsMaximize } from "./ArrowsMaximize";
import { ArrowsMinimize } from "./ArrowsMinimize";
import { Assemblies } from "./Assemblies";
import { Attachment } from "./Attachment";
import { AlignCenter } from "./AlignCenter";
import { AlignJustify } from "./AlignJustify";
import { AlignLeft } from "./AlignLeft";
import { AlignRight } from "./AlignRight";
import { Archive } from "./Archive";
import { Transfer } from "./Transfer";
import { Trashcan } from "./Trashcan";
import { Treeview } from "./Treeview";
import { Triangle } from "./Triangle";
import { Upload } from "./Upload";
import { User } from "./User";
import { ValueEngineering } from "./ValueEngineering";
import { Warning } from "./Warning";
import { XMark } from "./XMark";
import { Check } from "./Check";

const meta: Meta = {
  title: "Icons",
  component: undefined,
};

export const Icons = () => {
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const iconNames = document.querySelectorAll(".icon-name");
    iconNames.forEach(iconName => {
      const keywords = iconName.getAttribute("data-keywords");
      if (keywords?.toLowerCase().includes(searchValue.toLowerCase())) {
        iconName.parentElement!.style.display = "block";
      } else {
        iconName.parentElement!.style.display = "none";
      }
    });
  }, [searchValue]);

  return (
    <>
      <style>
        {`
        svg {
          width: 36px;
          height: 36px;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 2rem;
         }
        .container > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
         }
        `}
      </style>
      <div style={{ marginBottom: "2rem" }}>
        <span>Search: </span>
        <input
          type="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ height: 32, width: 300, borderRadius: 4, border: "1px solid gray", padding: 4, fontSize: "14px" }}
        />
      </div>
      <div className="container">
        <div>
          <div className="icon-name" data-keywords="pdf, adobe, acrobat">
            AdobeAcrobat
          </div>
          <AdobeAcrobat />
        </div>
        <div>
          <div className="icon-name" data-keywords="align, center">
            AlignCenter
          </div>
          <AlignCenter />
        </div>
        <div>
          <div className="icon-name" data-keywords="align, justify">
            AlignJustify
          </div>
          <AlignJustify />
        </div>
        <div>
          <div className="icon-name" data-keywords="align, left">
            AlignLeft
          </div>
          <AlignLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="align, right">
            AlignRight
          </div>
          <AlignRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="archive, file">
            Archive
          </div>
          <Archive />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrow, left">
            ArrowLeft
          </div>
          <ArrowLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrow, left, line">
            ArrowLeftToLine
          </div>
          <ArrowLeftToLine />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrow, right">
            ArrowRight
          </div>
          <ArrowRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrow, right, line">
            ArrowRightFromLine
          </div>
          <ArrowRightFromLine />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrow, rotate, right">
            ArrowRotateRight
          </div>
          <ArrowRotateRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrows, inward">
            ArrowsInward
          </div>
          <ArrowsInward />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrows, outward">
            ArrowsOutward
          </div>
          <ArrowsOutward />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrows, maximize, outward">
            ArrowsMaximize
          </div>
          <ArrowsMaximize />
        </div>
        <div>
          <div className="icon-name" data-keywords="arrows, minimize, inward">
            ArrowsMinimize
          </div>
          <ArrowsMinimize />
        </div>
        <div>
          <div className="icon-name" data-keywords="assemblies">
            Assemblies
          </div>
          <Assemblies />
        </div>
        <div>
          <div className="icon-name" data-keywords="attachment, paperclip">
            Attachment
          </div>
          <Attachment />
        </div>
        <div>
          <div className="icon-name" data-keywords="ban, stop">
            Ban
          </div>
          <Ban />
        </div>
        <div>
          <div className="icon-name" data-keywords="bars, menu">
            Bars
          </div>
          <Bars />
        </div>
        <div>
          <div className="icon-name" data-keywords="bars, sort, menu">
            BarsSort
          </div>
          <BarsSort />
        </div>
        <div>
          <div className="icon-name" data-keywords="bell, notification">
            Bell
          </div>
          <Bell />
        </div>
        <div>
          <div className="icon-name" data-keywords="board">
            Board
          </div>
          <Board />
        </div>
        <div>
          <div className="icon-name" data-keywords="breakdown, article">
            Breakdown
          </div>
          <Breakdown />
        </div>
        <div>
          <div className="icon-name" data-keywords="calendar, date">
            Calendar
          </div>
          <Calendar />
        </div>
        <div>
          <div className="icon-name" data-keywords="check, mark">
            Check
          </div>
          <Check />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevron, arrow, down">
            ChevronDown
          </div>
          <ChevronDown />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevron, arrow, left">
            ChevronLeft
          </div>
          <ChevronLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevron, arrow, right">
            ChevronRight
          </div>
          <ChevronRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevron, arrow, up">
            ChevronUp
          </div>
          <ChevronUp />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevrons, arrows, down">
            ChevronsDown
          </div>
          <ChevronsDown />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevrons, arrows, left">
            ChevronsLeft
          </div>
          <ChevronsLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevrons, arrows, right">
            ChevronsRight
          </div>
          <ChevronsRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="chevrons, arrows, up">
            ChevronsUp
          </div>
          <ChevronsUp />
        </div>
        <div>
          <div className="icon-name" data-keywords="circle, check, mark">
            CircleChecked
          </div>
          <CircleChecked />
        </div>
        <div>
          <div className="icon-name" data-keywords="circle, dollar">
            CircleDollar
          </div>
          <CircleDollar />
        </div>
        <div>
          <div className="icon-name" data-keywords="circle, info, i, exclamation">
            CircleInfo
          </div>
          <CircleInfo />
        </div>
        <div>
          <div className="icon-name" data-keywords="circle, plus, add, +">
            CirclePlus
          </div>
          <CirclePlus />
        </div>
        <div>
          <div className="icon-name" data-keywords="circle, x, mark, close">
            CircleXmark
          </div>
          <CircleXmark />
        </div>
        <div>
          <div className="icon-name" data-keywords="clock, time">
            Clock
          </div>
          <Clock />
        </div>
        <div>
          <div className="icon-name" data-keywords="clone, copy">
            Clone
          </div>
          <Clone />
        </div>
        <div>
          <div className="icon-name" data-keywords="comma">
            Comma
          </div>
          <Comma />
        </div>
        <div>
          <div className="icon-name" data-keywords="comments, chat">
            Comments
          </div>
          <Comments />
        </div>
        <div>
          <div className="icon-name" data-keywords="comments, chat, badge">
            CommentsBadge
          </div>
          <CommentsBadge />
        </div>
        <div>
          <div className="icon-name" data-keywords="company, building">
            Company
          </div>
          <Company />
        </div>
        <div>
          <div className="icon-name" data-keywords="connect, link">
            Connect
          </div>
          <Connect />
        </div>
        <div>
          <div className="icon-name" data-keywords="copy, duplicate">
            Copy
          </div>
          <Copy />
        </div>
        <div>
          <div className="icon-name" data-keywords="dashboard">
            Dashboard
          </div>
          <Dashboard />
        </div>
        <div>
          <div className="icon-name" data-keywords="deficiency, wrench, gear, tool">
            Deficiency
          </div>
          <Deficiency />
        </div>
        <div>
          <div className="icon-name" data-keywords="deficiency, list">
            DeficiencyList
          </div>
          <DeficiencyList />
        </div>
        <div>
          <div className="icon-name" data-keywords="download, arrow">
            Download
          </div>
          <Download />
        </div>
        <div>
          <div className="icon-name" data-keywords="driver, person, user">
            Driver
          </div>
          <Driver />
        </div>
        <div>
          <div className="icon-name" data-keywords="elipsis, more">
            Elipsis
          </div>
          <Elipsis />
        </div>
        <div>
          <div className="icon-name" data-keywords="elipsis, more, vertical">
            ElipsisVertical
          </div>
          <ElipsisVertical />
        </div>
        <div>
          <div className="icon-name" data-keywords="elipsis, more, vertical, stroke">
            ElipsisVerticalStroke
          </div>
          <ElipsisVerticalStroke />
        </div>
        <div>
          <div className="icon-name" data-keywords="email, mail, envelope">
            Email
          </div>
          <Email />
        </div>
        <div>
          <div className="icon-name" data-keywords="exclusion, square, exclamation">
            Exclusion
          </div>
          <Exclusion />
        </div>
        <div>
          <div className="icon-name" data-keywords="expand, square">
            Expand
          </div>
          <Expand />
        </div>
        <div>
          <div className="icon-name" data-keywords="export, arrow">
            Export
          </div>
          <Export />
        </div>
        <div>
          <div className="icon-name" data-keywords="eye, view">
            Eye
          </div>
          <Eye />
        </div>
        <div>
          <div className="icon-name" data-keywords="eye, slash, view, hide">
            EyeSlash
          </div>
          <EyeSlash />
        </div>
        <div>
          <div className="icon-name" data-keywords="file, chart">
            FileChart
          </div>
          <FileChart />
        </div>
        <div>
          <div className="icon-name" data-keywords="file, chart, column, bar">
            FileChartColumn
          </div>
          <FileChartColumn />
        </div>
        <div>
          <div className="icon-name" data-keywords="file, excel">
            FileExcel
          </div>
          <FileExcel />
        </div>
        <div>
          <div className="icon-name" data-keywords="file, lines">
            FileLines
          </div>
          <FileLines />
        </div>
        <div>
          <div className="icon-name" data-keywords="filter, funnel">
            Filter
          </div>
          <Filter />
        </div>
        <div>
          <div className="icon-name" data-keywords="filter, circle, x, mark">
            FilterCircleXMark
          </div>
          <FilterCircleXMark />
        </div>
        <div>
          <div className="icon-name" data-keywords="filter, slash">
            FilterSlash
          </div>
          <FilterSlash />
        </div>
        <div>
          <div className="icon-name" data-keywords="flag, pennant">
            FlagPennant
          </div>
          <FlagPennant />
        </div>
        <div>
          <div className="icon-name" data-keywords="folder, closed">
            FolderClosed
          </div>
          <FolderClosed />
        </div>
        <div>
          <div className="icon-name" data-keywords="folder, open">
            FolderOpen
          </div>
          <FolderOpen />
        </div>
        <div>
          <div className="icon-name" data-keywords="gear, settings">
            Gear
          </div>
          <Gear />
        </div>
        <div>
          <div className="icon-name" data-keywords="google">
            Google
          </div>
          <Google />
        </div>
        <div>
          <div className="icon-name" data-keywords="grid, dividers, dots">
            GridDividers
          </div>
          <GridDividers />
        </div>
        <div>
          <div className="icon-name" data-keywords="grip, handle, dots">
            Grip
          </div>
          <Grip />
        </div>
        <div>
          <div className="icon-name" data-keywords="grid, dots">
            Grid
          </div>
          <Grid />
        </div>
        <div>
          <div className="icon-name" data-keywords="house, home">
            House
          </div>
          <House />
        </div>
        <div>
          <div className="icon-name" data-keywords="image, picture">
            Image
          </div>
          <Image />
        </div>
        <div>
          <div className="icon-name" data-keywords="import, arrow">
            Import
          </div>
          <Import />
        </div>
        <div>
          <div className="icon-name" data-keywords="install, glass, wrench, tool">
            InstallGlass
          </div>
          <InstallGlass />
        </div>
        <div>
          <div className="icon-name" data-keywords="install, rail, wrench, tool">
            InstallRail
          </div>
          <InstallRail />
        </div>
        <div>
          <div className="icon-name" data-keywords="layer, group">
            LayerGroup
          </div>
          <LayerGroup />
        </div>
        <div>
          <div className="icon-name" data-keywords="library, book, bookmark">
            Library
          </div>
          <Library />
        </div>
        <div>
          <div className="icon-name" data-keywords="list, search">
            ListSearch
          </div>
          <ListSearch />
        </div>
        <div>
          <div className="icon-name" data-keywords="link, slash, disconnect">
            LinkSlash
          </div>
          <LinkSlash />
        </div>
        <div>
          <div className="icon-name" data-keywords="link, connect">
            Link
          </div>
          <Link />
        </div>
        <div>
          <div className="icon-name" data-keywords="list, bullet">
            List
          </div>
          <List />
        </div>
        <div>
          <div className="icon-name" data-keywords="lift, truck, forklift">
            LiftTruck
          </div>
          <LiftTruck />
        </div>
        <div>
          <div className="icon-name" data-keywords="lock, open, security">
            LockOpen
          </div>
          <LockOpen />
        </div>
        <div>
          <div className="icon-name" data-keywords="lock, close, security">
            Lock
          </div>
          <Lock />
        </div>
        <div>
          <div className="icon-name" data-keywords="magnifier, search">
            Magnifier
          </div>
          <Magnifier />
        </div>
        <div>
          <div className="icon-name" data-keywords="magnifier, plus, search">
            MagnifierPlus
          </div>
          <MagnifierPlus />
        </div>
        <div>
          <div className="icon-name" data-keywords="magnifier, minus, search">
            MagnifierMinus
          </div>
          <MagnifierMinus />
        </div>
        <div>
          <div className="icon-name" data-keywords="map, pin, location">
            MapPin
          </div>
          <MapPin />
        </div>
        <div>
          <div className="icon-name" data-keywords="measuring, ruler, tool">
            Measuring
          </div>
          <Measuring />
        </div>
        <div>
          <div className="icon-name" data-keywords="members, people, users">
            Members
          </div>
          <Members />
        </div>
        <div>
          <div className="icon-name" data-keywords="minus, remove, dash">
            Minus
          </div>
          <Minus />
        </div>
        <div>
          <div className="icon-name" data-keywords="move, arrow, folder">
            Move
          </div>
          <Move />
        </div>
        <div>
          <div className="icon-name" data-keywords="note, paper, badge, list">
            NoteBadge
          </div>
          <NoteBadge />
        </div>
        <div>
          <div className="icon-name" data-keywords="note, paper, list">
            Note
          </div>
          <Note />
        </div>
        <div>
          <div className="icon-name" data-keywords="object, group, square">
            ObjectGroup
          </div>
          <ObjectGroup />
        </div>
        <div>
          <div className="icon-name" data-keywords="paint, brush">
            PaintBrush
          </div>
          <PaintBrush />
        </div>
        <div>
          <div className="icon-name" data-keywords="pencil, write, edit">
            Pencil
          </div>
          <Pencil />
        </div>
        <div>
          <div className="icon-name" data-keywords="plus, add, +">
            Plus
          </div>
          <Plus />
        </div>
        <div>
          <div className="icon-name" data-keywords="print, printer">
            Print
          </div>
          <Print />
        </div>
        <div>
          <div className="icon-name" data-keywords="production, schedule, timeline">
            ProductionSchedule
          </div>
          <ProductionSchedule />
        </div>
        <div>
          <div className="icon-name" data-keywords="progress, bar, circle">
            Progress
          </div>
          <Progress />
        </div>
        <div>
          <div className="icon-name" data-keywords="projects, article">
            Projects
          </div>
          <Projects />
        </div>
        <div>
          <div className="icon-name" data-keywords="qc, approve, check, mark">
            QCApprove
          </div>
          <QCApprove />
        </div>
        <div>
          <div className="icon-name" data-keywords="question, mark">
            Question
          </div>
          <Question />
        </div>
        <div>
          <div className="icon-name" data-keywords="refresh, reload">
            Refresh
          </div>
          <Refresh />
        </div>
        <div>
          <div className="icon-name" data-keywords="reply, chat, arrow, left">
            Reply
          </div>
          <Reply />
        </div>
        <div>
          <div className="icon-name" data-keywords="repost, share, arrows">
            RePost
          </div>
          <RePost />
        </div>
        <div>
          <div className="icon-name" data-keywords="role, permission, shield, person, user">
            RolePermission
          </div>
          <RolePermission />
        </div>
        <div>
          <div className="icon-name" data-keywords="save, disk">
            Save
          </div>
          <Save />
        </div>
        <div>
          <div className="icon-name" data-keywords="scale, balanced, justice">
            ScaleBalanced
          </div>
          <ScaleBalanced />
        </div>
        <div>
          <div className="icon-name" data-keywords="selected, check, mark, circle">
            Selected
          </div>
          <Selected />
        </div>
        <div>
          <div className="icon-name" data-keywords="send, arrow, right">
            Send
          </div>
          <Send />
        </div>
        <div>
          <div className="icon-name" data-keywords="sidebar, left, menu">
            SidebarLeft
          </div>
          <SidebarLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="sigma, math, greek">
            Sigma
          </div>
          <Sigma />
        </div>
        <div>
          <div className="icon-name" data-keywords="slash, divide">
            Slash
          </div>
          <Slash />
        </div>
        <div>
          <div className="icon-name" data-keywords="slider, up, lines">
            SliderUp
          </div>
          <SliderUp />
        </div>
        <div>
          <div className="icon-name" data-keywords="snowflake, winter, cold">
            Snowflake
          </div>
          <Snowflake />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, arrow, up, left">
            SquareArrowUpLeft
          </div>
          <SquareArrowUpLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, arrow, down, right">
            SquareArrowDownRight
          </div>
          <SquareArrowDownRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, caret, down">
            SquareCaretDown
          </div>
          <SquareCaretDown />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, caret, up">
            SquareCaretUp
          </div>
          <SquareCaretUp />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, down, right, arrow">
            SquareDownRight
          </div>
          <SquareDownRight />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, up, left, arrow">
            SquareUpLeft
          </div>
          <SquareUpLeft />
        </div>
        <div>
          <div className="icon-name" data-keywords="square, minus, remove">
            SquareMinus
          </div>
          <SquareMinus />
        </div>
        <div>
          <div className="icon-name" data-keywords="star, favorite">
            Star
          </div>
          <Star />
        </div>
        <div>
          <div className="icon-name" data-keywords="star, favorite">
            StarFilled
          </div>
          <StarFilled />
        </div>
        <div>
          <div className="icon-name" data-keywords="transfer, arrow">
            Transfer
          </div>
          <Transfer />
        </div>
        <div>
          <div className="icon-name" data-keywords="trashcan, delete, remove">
            Trashcan
          </div>
          <Trashcan />
        </div>
        <div>
          <div className="icon-name" data-keywords="treeview, tree, structure">
            Treeview
          </div>
          <Treeview />
        </div>
        <div>
          <div className="icon-name" data-keywords="triangle">
            Triangle
          </div>
          <Triangle />
        </div>
        <div>
          <div className="icon-name" data-keywords="upload, arrow">
            Upload
          </div>
          <Upload />
        </div>
        <div>
          <div className="icon-name" data-keywords="user, person">
            User
          </div>
          <User />
        </div>
        <div>
          <div className="icon-name" data-keywords="value, engineering">
            ValueEngineering
          </div>
          <ValueEngineering />
        </div>
        <div>
          <div className="icon-name" data-keywords="warning, exclamation, triangle">
            Warning
          </div>
          <Warning />
        </div>
        <div>
          <div className="icon-name" data-keywords="x, mark, close">
            XMark
          </div>
          <XMark />
        </div>
      </div>
    </>
  );
};

export default meta;
